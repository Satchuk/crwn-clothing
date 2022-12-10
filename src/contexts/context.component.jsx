import { createContext ,useState,useEffect,useReducer} from "react";
import { createuserDoc, onAuthStateChangedListener } from "../utils/firebase/firebaseUtils";
import { CreateAction } from "../utils/reducers/reducers.utils";
export const UserContext = createContext({
     currentuser : null,
     setCurrentuser :()=>null
});

export const User_action ={
  set_currentUser : 'SET_CURRENT_USER'
}

const userReducer =(state , action)=>{
  const {type ,payload} = action;
  switch(type){
    case User_action.set_currentUser :
      return{
        currentuser : payload
      }
    default:
      throw new Error( `Unhandled type ${type} in userReducer`);
  }

}

const Initialstate={
  currentuser: null
}

export const UserProvider = ({children})=>{
    // const [currentuser , setCurrentuser] = useState(null);
    const [{currentuser}, dispatch]= useReducer(userReducer,Initialstate);
    const setCurrentuser =(user)=>{
      dispatch(
        CreateAction(User_action.set_currentUser, user)
      );
      // dispatch({type: User_action.set_currentUser ,})
    }
    
    const value = {currentuser , setCurrentuser};

    useEffect(()=>{
      const unsubscribe=  onAuthStateChangedListener((user)=>{
        if(user){
            createuserDoc(user);
        }
      setCurrentuser(user);
      });

      return unsubscribe;
    },[])


    return<UserContext.Provider value={value}>{children}</UserContext.Provider>
}

