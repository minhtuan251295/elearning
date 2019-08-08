import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from "lodash";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    const value = localStorage.getItem("CurrentUser");
    const user = JSON.parse(value);
    this.setState({
      user
    })
  }

  logOut = () => {
    localStorage.removeItem("CurrentUser");
    this.props.history.push("/sign-in");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-light navbar-light">
          <a className="navbar-brand" href="#asd">Navbar</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-2">
                <a className="nav-link" href="#asd">Link</a>
              </li>
              {
                _.isEmpty(this.state.user) ?
                  <React.Fragment>
                    <li className="nav-item mr-2">
                      <Link to="/sign-in" className="btn btn-info">Sign In</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/register" className="btn btn-primary">Register</Link>
                    </li>
                  </React.Fragment>
                  :
                  <>
                    <li>
                      <div className="dropdown">
                        <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-user"></i>
                        </button>
                        <div className="dropdown-menu">
                          <button className="btn btn-info" onClick={this.logOut}>Logout</button>
                        </div>
                      </div>
                    </li>
                  </>
              }

            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default withRouter(Navbar);