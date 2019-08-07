import React, { Component } from 'react';
import { connect } from "react-redux";
import CourseItem from '../CourseItem';

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.courses !== prevState) {
      return {
        courses: nextProps.courses
      }
    }
    return null;
  }

  render() {
    const elmCourse = this.state.courses.map((course, index) => {
      return <div key={index} className="col-md-4">
        <CourseItem course={course} />
      </div>
    })
    return (
      <div className="container">
        <div className="row">
          {elmCourse}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses
  }
}
export default connect(mapStateToProps)(CourseList);
