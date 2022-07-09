import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";

export const setCategories = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
export const setIsLoading = (isLoading) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_IS_LOADING, isLoading);
