import React from 'react';
import { connect } from "react-redux";
import * as actions from "./actions/course";
import _ from "lodash";
import CourseList from './container/CourseList';
import Navbar from './container/Navbar';
import Cover from './container/Cover';
import CourseCategory from './container/CourseCategory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getCategories((categories) => {
      this.elmCourses = categories.forEach((category) => {
        this.props.getCoursesFromCategory(category.maDanhMuc, (result) => {
          this.setState({
            [category.maDanhMuc]: result,
          })
        });
      })

    });
    // this.props.getCourses();
  }

  render() {
    const coursesCategories = _.values(this.state);
    const elmCourses = coursesCategories.map((courses, index) => {
      const category = courses[0].danhMucKhoaHoc;
      return <CourseCategory key={index} courses={courses} category={category} />
    })
    return (
      <>
        <Navbar />
        <Cover />
        <CourseList />
        {elmCourses}
      </>
    );
  }
}

export default connect(null, actions)(App);
