import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from "../../actions/course";
import { withRouter } from "react-router-dom";

class CourseItem extends Component {
  onGetCourseDetail = () => {
    this.props.getCourseDetail(this.props.course.maKhoaHoc, () => {
      this.props.history.push(`/course/${this.props.course.maKhoaHoc}`)
    })
  }

  render() {
    const { course } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={course.hinhAnh} alt="Card" />
        <div className="card-body">
          <h4 className="card-title">{course.tenKhoaHoc}</h4>
          <p className="card-text">Some example text.</p>
          <button className="btn btn-primary" onClick={this.onGetCourseDetail}>Xem chi tiết</button>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(null, actions)(CourseItem));
