import { BaseButton,GooglesignInbutton,InvertedsignInbutton } from "./button.styles"
export const ButtonTypeClasses ={
    base : 'base',
    google : 'google-sign-in',
    inverted : 'inverted'
}

const getbtn =(buttonType = ButtonTypeClasses.base )=>
   ( {
        [ButtonTypeClasses.base] : BaseButton,
        [ButtonTypeClasses.google] : GooglesignInbutton,
        [ButtonTypeClasses.inverted]: InvertedsignInbutton
    }[buttonType]);


export const Button=({children , buttonType, ...otherProps})=>{
    const Custombutton = getbtn(buttonType);
    return(
        <Custombutton {...otherProps}>{children}</Custombutton>
    )
}