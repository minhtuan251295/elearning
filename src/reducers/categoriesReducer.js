import * as Types from "../constants";

const initialState = [];

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_CATEGORIES_COURSE:
      return action.payload;
    default:
      return state;
  }
}