import * as Types from "../constants";
import axios from "axios";

export const getCourses = () => {
  return (dispatch) => {
    axios
      .get(`http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc`, {
        params: {
          MaNhom: "GP01"
        }
      })
      .then(res => {
        dispatch({
          type: Types.GET_COURSES,
          payload: res.data
        })
      })
      .catch(err => console.log(err));

  }
}

export const getCourseDetail = (maKhoaHoc, callback) => {
  return (dispatch) => {
    axios
      .get("http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc", {
        params: {
          maKhoaHoc: maKhoaHoc
        }
      })
      .then(res => {
        dispatch({
          type: Types.GET_COURSE_DETAIL,
          payload: res.data,
        })
        if (callback) callback(res.data)
      })
      .catch(err => console.log(err));
  }
}