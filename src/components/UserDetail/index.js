import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/user";

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      hoTen: "",
      soDT: "",
      taiKhoan: "",
      maLoaiNguoiDung: "",
      matKhau: "abc",
      maNhom: "GP01"
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    this.setState({
      email: user.email,
      hoTen: user.hoTen,
      soDT: user.soDT,
      taiKhoan: user.taiKhoan,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser(this.state);
  }
  render() {
    return (
      <div className="container p-5" style={{ width: "600px" }}>
        <h1 className="text-center">USER DETAIL</h1>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài Khoản:</label>
            <input type="text" className="form-control" value={this.state.taiKhoan} name="taiKhoan" id="taiKhoan" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Mật Khẩu:</label>
            <input type="password" className="form-control" value={this.state.matKhau} name="matKhau" id="pwd" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Họ Tên:</label>
            <input type="text" className="form-control" value={this.state.hoTen} name="hoTen" id="name" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="soDT">Số ĐT:</label>
            <input type="number" className="form-control" value={this.state.soDT} name="soDT" id="soDT" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" value={this.state.email} name="email" id="email" onChange={this.onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Cập nhật</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(UserDetail);