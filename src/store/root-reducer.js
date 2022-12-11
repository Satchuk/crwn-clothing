import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./category/category.reducer";

export const RootReducer = combineReducers({
    user : userReducer,
    categories : categoriesReducer
});