import React, { Component } from 'react'
import CourseItem from '../CourseItem';

export default class CourseCategory extends Component {
  render() {
    const elmCourse = this.props.courses.map((course, index) => {
      if (index <= 2) {
        return <div className="col-md-4" key={index}>
          <CourseItem course={course} />
        </div>
      }
      return ""
    })
    return (
      <div className="container">
        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <h3>{this.props.category.tenDanhMucKhoaHoc}</h3>
          <span>Xem tất cả</span>
        </div>
        <div className="row">
          {elmCourse}
        </div>
      </div>
    )
  }
}
