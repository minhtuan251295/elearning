import { combineReducers } from 'redux';
import { coursesReducer } from "./coursesReducer";
import { courseReducer } from "./courseReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  courseDetail: courseReducer
})
export default rootReducer;