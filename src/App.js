import React from 'react';
import { connect } from "react-redux";
import * as actions from "./actions/course";
import CourseList from './container/CourseList';

class App extends React.Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <CourseList />
    );
  }
}



export default connect(null, actions)(App);
