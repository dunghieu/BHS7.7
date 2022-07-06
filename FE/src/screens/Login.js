import "../styles/LoginRegister.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/userActions";

const Login = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, error } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {console.log("check userinfo", userInfo)}
      {console.log("check userLogin", userLogin)}
      <div className="container">
        <div className="content">
          <h1 className="title">Login</h1>
          <form className="form-container">
            <label>
              Email <br />
              <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
            <label>
              Password <br />
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <div style={{ color: "red" }}>{error}</div>
            <input
              className="submit-btn"
              type="submit"
              value="Submit"
              onClick={(e) => submitHandler(e)}
            />
            <div>
              New Customer? <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
