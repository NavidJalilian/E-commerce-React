import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";

export const setCategories = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
