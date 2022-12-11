import {initializeApp} from 'firebase/app';
import {
  signOut, 
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword, 
  signInWithPopup,signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc, collection,writeBatch,query,getDocs} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXYizhckzDoj2CaL0pXd9b5T8ZxOYfFdA",
    authDomain: "crown-clothing-db-92aa4.firebaseapp.com",
    projectId: "crown-clothing-db-92aa4",
    storageBucket: "crown-clothing-db-92aa4.appspot.com",
    messagingSenderId: "635437934292",
    appId: "1:635437934292:web:e16e4ad682f14f69517d41"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt : "select_account"
  })

  export const auth =  getAuth();
  export const signInWithgooglePopup =  ()=> signInWithPopup(auth,provider);
  export const signInWithgoogleRedirect =  ()=> signInWithRedirect(auth,provider);

  export const db = getFirestore();

  export const createuserDoc = async(userAuth , additionalInfo = {})=>{
    const docResp = await doc(db, 'users',userAuth.uid);
    const userData = await getDoc(docResp);
    console.log(userData.exists());
    if(!userData.exists()){
     const {displayName , email} = userAuth;
     const createdAt = new Date();

     try{
        await setDoc(docResp,{
          displayName,
          email,
          createdAt,
          ...additionalInfo
        });
     }catch(err){
        console.log(err.message);
     }
    }
    return docResp;
  }

  export const createAuthUser =async(email , password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const SignIncreateAuthUser =async(email , password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth,email,password);
  }

  export const signoutUser=async()=> await signOut(auth);

  export const onAuthStateChangedListener =(callback)=> onAuthStateChanged(auth,callback);

  export const addCollectionAndDoc = async(collectionKey, objectToAdd)=>{
    const collectionRef = collection(db,collectionKey);
    const batch = writeBatch(db);
    objectToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef,object);
    });
    await batch.commit();
    console.log('done');
  };

  export const getCategoriesAndDocs = async()=>{
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapChat => docSnapChat.data());
    
   
  }