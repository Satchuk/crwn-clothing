import { useState } from "react"
import { createAuthUser,createuserDoc } from "../../utils/firebase/firebaseUtils";
import { FormInput } from "../formInput/forInput.component";
import '../signup/signup.styles.scss';
import { Button } from "../button/button.component";

const DefaultformFields={
    displayname : '',
    email : '',
    password : '',
    confirmpwd : ''
}

export const SignUpForm =()=>{

    const [formfield , setFormfield] = useState(DefaultformFields);
    const {displayname,email,password,confirmpwd} = formfield;

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
        if(password !== confirmpwd){
            alert('Password does not match');
            return;
        }

        try{
            const {user} = await createAuthUser(email,password);
            await createuserDoc(user ,{displayname});
            resetFormfields();
        }
        catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('Email already exists');
            }else{
                console.log('err --->',err)
            }
            
        }
    }


    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmit}>
                <FormInput label="Display Name" type='text' name="displayname" required value={displayname} onChange={handleChange}/>
                <FormInput label="Email" type='email' name="email" required value={email} onChange={handleChange}/>
                <FormInput label="Password" type='password' name="password" required value={password} onChange={handleChange}/>
                <FormInput label="Confirm pasword" type='password' name="confirmpwd" value={confirmpwd} required onChange={handleChange}/>
                
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}