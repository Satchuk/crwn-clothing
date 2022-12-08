import { useState} from "react"
import { signInWithgooglePopup,createAuthUser,createuserDoc,SignIncreateAuthUser } from "../../utils/firebase/firebaseUtils";
import { FormInput } from "../formInput/forInput.component";
import '../signIn/sign-in-form.styles.scss';
import { Button,ButtonTypeClasses } from "../button/button.component";
const DefaultformFields={
    email : '',
    password : ''
}

export const SignInForm =()=>{
    const [formfield , setFormfield] = useState(DefaultformFields);
    const {email,password} = formfield;

    const signInwithgoogle =async()=>{
       await signInWithgooglePopup();
    }

    const resetFormfields=()=>{
        setFormfield(DefaultformFields);
    }

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormfield({...formfield,[name]:value})
        console.log(formfield); 
    }

    const onSubmit =async(e)=>{
        e.preventDefault();
        try{
          const {user} = await SignIncreateAuthUser(email,password);
          console.log(user);
          resetFormfields()
        }
        catch(err){
            switch(err.code){
                case 'auth/wrong-password':
                    alert('Incorrect password or email');
                    break
                case 'auth/user-not-found':
                    alert('Email not exist');
                    break
                default :
                    console.log(err);
            }
        }
    }


    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput label="Email" type='email' name="email" required value={email} onChange={handleChange}/>
                <FormInput label="Password" type='password' name="password" required value={password} onChange={handleChange}/>
                
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button buttonType={ButtonTypeClasses.google} onClick={signInwithgoogle} >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}