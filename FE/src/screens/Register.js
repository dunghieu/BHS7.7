import "../styles/LoginRegister.scss";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

const Register = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, error } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <h1 className="title">Register</h1>
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
              Have an Account? <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
