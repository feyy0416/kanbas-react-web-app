import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
        username: "", password: ""
    });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/Kanbas/Account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
            <div className="ms-2" style={{ width: "500px" }}>
                <h1>Signup</h1>
                {error && <div>{error}</div>}
                <input
                    className="form-control"
                    value={credentials.username}
                    placeholder="username"
                    onChange={(e) => setCredentials({
                        ...credentials,
                        username: e.target.value
                    })} />
                <input
                    className="form-control mt-2"
                    placeholder="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value
                    })} />
                <button onClick={signup} className="btn btn-primary w-100 mt-2">
                    Signup
                </button>
            </div>
        </div>

    );
}
export default Signup;