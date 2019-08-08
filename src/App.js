import React from 'react';
import { connect } from "react-redux";
import * as actions from "./actions/course";
import CourseList from './container/CourseList';
import Navbar from './container/Navbar';

class App extends React.Component {

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <>
        <Navbar />
        <CourseList />
      </>
    );
  }
}

export default connect(null, actions)(App);
