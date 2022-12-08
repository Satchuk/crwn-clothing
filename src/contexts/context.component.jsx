import { createContext ,useState,useEffect} from "react";
import { createuserDoc, onAuthStateChangedListener } from "../utils/firebase/firebaseUtils";

export const UserContext = createContext({
     currentuser : null,
     setCurrentuser :()=>null
});

export const UserProvider = ({children})=>{
    const [currentuser , setCurrentuser] = useState(null);
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