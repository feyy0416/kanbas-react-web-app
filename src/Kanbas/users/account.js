import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount(account);
  };
  const save = async () => {
    await client.updateUser(account);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Signin");
  };


  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div className="w-50">
      {account && (
        <div className="ms-2">
          <input value={account.password}
            className="form-control mt-2"
            placeholder="password"
            onChange={(e) => setAccount({
              ...account,
              password: e.target.value
            })} />
          <input value={account.firstName}
            className="form-control mt-2"
            placeholder="first name"
            onChange={(e) => setAccount({
              ...account,
              firstName: e.target.value
            })} />
          <input value={account.lastName}
            className="form-control mt-2"
            placeholder="last name"
            onChange={(e) => setAccount({
              ...account,
              lastName: e.target.value
            })} />
          <input value={account.dob}
            className="form-control mt-2"
            placeholder="birthday"
            onChange={(e) => setAccount({
              ...account,
              dob: e.target.value
            })} />
          <input value={account.email}
            className="form-control mt-2"
            placeholder="email"
            onChange={(e) => setAccount({
              ...account,
              email: e.target.value
            })} />
          <select value={account.role}
            className="form-select mt-2"
            onChange={(e) => setAccount({
              ...account,
              role: e.target.value
            })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
        </div>
      )}
      <button onClick={save} className="btn btn-primary w-100 ms-2 mt-2">
        Save
      </button>
      <Link to="/Kanbas/Admin/users" className="btn btn-warning w-100 ms-2 mt-2">
        Users
      </Link>
      <button className="btn btn-danger w-100 ms-2 mt-2" onClick={signout}>
        Signout
      </button>
    </div>
  );
}
export default Account;