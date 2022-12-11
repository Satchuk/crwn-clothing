
import { User_action } from "./user.types";

  const Initialstate={
    currentuser: null
  }
  
 export const userReducer =(state = Initialstate , action)=>{
    console.log(action)
   const {type ,payload} = action;
    console.log('payload',type,payload)
    switch(type){
      case User_action.set_currentUser :
        return{
            ...state,
          currentuser : payload
        }
      default:
        return state;
    }
  
  }
  
 