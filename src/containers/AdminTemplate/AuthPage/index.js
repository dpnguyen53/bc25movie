import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actLogin } from "./reducer/actions";
import { useNavigate, Navigate } from "react-router-dom";

export default function AuthPage() {
  const props = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(actLogin(state, navigate));
  };

  if (localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/admin" />;

  const renderNoti = () => {
    const { error } = props;
    return (
      error && (
        <div className="alert alert-danger">{error.response.data.content}</div>
      )
    );
  };

  if (props.loading) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h1 className="text-center">*AuthPage</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          {/* Render show Error */}
          {renderNoti()}
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="matKhau"
                className="form-control"
                onChange={handleOnchange}
              />
            </div>
            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
