import { CATEGORIES_ACTION_TYPES } from "./types";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  
};
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: action.payload,
      };
      case CATEGORIES_ACTION_TYPES.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state;
  }
};
