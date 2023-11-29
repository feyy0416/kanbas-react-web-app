import * as client from "./client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };
  return (
    <div style={{display: "flex", justifyContent: "center", height: "100vh" }}>
      <div style={{ width: "500px" }}>
        <h1>Kanbas Signin</h1>
        <input className="form-control" placeholder="username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
        <input className="form-control mt-2" placeholder="password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
        <button className="btn btn-success mt-2 w-100" onClick={signin}> Sign in </button>
        <Link to="/Kanbas/Signup" className="btn btn-primary w-100 mt-2">
          Go to Sign up Page
        </Link>
      </div>
    </div>
  );
}
export default Signin;