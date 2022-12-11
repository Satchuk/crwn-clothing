import { CreateAction } from "../../utils/reducers/reducers.utils";
import { Categories_type } from "./user.types";

export const setCategoriesMap = (categoriesMap)=>
    CreateAction(Categories_type.SET_CATEGORIES_MAP,categoriesMap);
