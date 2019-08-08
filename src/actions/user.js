import axios from "axios";
// import * as Types from "../constants";

export const register = (data, callback) => {
  return (dispatch) => {
    axios
      .post("http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy", data)
      .then(res => {
        if (callback) callback();
      })
      .catch(err => console.log(err))
  }
}

export const signIn = (data, callback) => {
  return (dispatch) => {
    axios
      .post("http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap", data)
      .then(res => {
        const jsonData = JSON.stringify(res.data);
        localStorage.setItem("CurrentUser", jsonData);
        if (callback) callback()
      })
      .catch(err => console.log(err))
  }
}