import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/user";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
      maNhom: "GP01",
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state, () => {
      this.props.history.push("/sign-in")
    })
  }

  render() {
    return (
      <div className="container p-5" style={{ width: "600px" }}>
        <h1 className="text-center">REGISTER</h1>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài Khoản:</label>
            <input type="text" className="form-control" name="taiKhoan" id="taiKhoan" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Mật Khẩu:</label>
            <input type="password" className="form-control" name="matKhau" id="pwd" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Họ Tên:</label>
            <input type="text" className="form-control" name="hoTen" id="name" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="soDT">Số ĐT:</label>
            <input type="number" className="form-control" name="soDT" id="soDT" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" name="email" id="email" onChange={this.onChange} />
          </div>
          <button type="submit" className="btn btn-primary">Đăng ký</button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(Register));