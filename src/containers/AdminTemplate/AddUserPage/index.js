import React, { useState } from "react";
import { actAddUser } from "./reducer/actions";
import { useDispatch } from "react-redux";

export default function AddUserPage() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  };

  return (
    <div className="container">
      <h1 className="text-center">*Add User</h1>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="matKhau"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>SoDT</label>
              <input
                type="text"
                className="form-control"
                name="soDt"
                onChange={handleOnchange}
              />
            </div>
            <div className="form-group">
              <label>Ho Ten</label>
              <input
                type="text"
                className="form-control"
                name="hoTen"
                onChange={handleOnchange}
              />
            </div>
            <button className="btn btn-success">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
}
