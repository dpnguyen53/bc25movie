import React from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function AdminTemplate() {
  if (!localStorage.getItem("UserAdmin"))
    return <Navigate replace to="/auth" />;

  return (
    <>
      <div>Navbar Admin</div>
      <Outlet />
    </>
  );
}
