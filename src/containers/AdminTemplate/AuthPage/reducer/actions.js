import * as ActionType from "./constants";
import { api } from "utils/apiUtil";

export const actLogin = (user, navigate) => {
  return (dispatch) => {
    dispatch(actAuthRequest());

    api
      .post("QuanLyNguoiDung/DangNhap", user)
      .then((result) => {
        //Check maLoaiNguoiDung
        if (result.data.content.maLoaiNguoiDung === "KhachHang") {
          //Bao Loi
          return Promise.reject({
            response: {
              data: {
                content: "Tài Khoản Không Có Quyền Truy Cập!",
              },
            },
          });
        }

        dispatch(actAuthSuccess(result.data.content));

        //Luu thong tin user xuong locaStorage (trạng thái đã login)
        localStorage.setItem("UserAdmin", JSON.stringify(result.data.content));

        // Redirect to /admin
        navigate("/admin", { replace: true });
      })
      .catch((error) => {
        dispatch(actAuthFailed(error));
      });
  };
};

const actAuthRequest = () => {
  return {
    type: ActionType.AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: ActionType.AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFailed = (error) => {
  return {
    type: ActionType.AUTH_FAILED,
    payload: error,
  };
};
