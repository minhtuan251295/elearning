import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions/user";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state, () => {
      this.props.history.push("/")
    })
  }

  render() {
    return (
      <div className="container p-5" style={{ width: "600px" }}>
        <h1 className="text-center">SIGNIN</h1>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label htmlFor="taiKhoan">Tài Khoản:</label>
            <input type="text" className="form-control" name="taiKhoan" id="taiKhoan" onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Mật Khẩu:</label>
            <input type="password" className="form-control" name="matKhau" id="pwd" onChange={this.onChange} />
          </div>

          <button type="submit" className="btn btn-primary">Đăng nhập</button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(SignIn));
