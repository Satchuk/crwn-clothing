import { SignUpForm } from "../../Components/signup/signup.component";
import { SignInForm } from "../../Components/signIn/signIn.component";
import '../Auth/auth.styles.scss';

export const Authentication =()=>{
    return(
        <div className="authentication-container">  
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}