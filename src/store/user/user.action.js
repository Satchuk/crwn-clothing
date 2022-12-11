import { CreateAction } from "../../utils/reducers/reducers.utils";
import { User_action } from "./user.types";
export const setCurrentuser =(user)=>
      CreateAction(User_action.set_currentUser, user)
