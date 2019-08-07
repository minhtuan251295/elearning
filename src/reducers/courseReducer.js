import * as Types from "../constants";

const initialState = {};

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_COURSE_DETAIL:
      return action.payload;
    default:
      return state;
  }
}