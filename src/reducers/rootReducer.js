import { combineReducers } from 'redux';
import { coursesReducer } from "./coursesReducer";
import { courseReducer } from "./courseReducer";
import { categoriesReducer } from "./categoriesReducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  courseDetail: courseReducer,
  categories: categoriesReducer,
})
export default rootReducer;