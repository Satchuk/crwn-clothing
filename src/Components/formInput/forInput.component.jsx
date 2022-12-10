import { FormInputLabel,Input,Group } from "./form-input.styles"
export const FormInput =({label, ...Addprops})=>{
    return(
        <Group>
           <Input {...Addprops}/>
           {label && (<FormInputLabel shrink={Addprops.value.length} >{label}</FormInputLabel>)} 
        </Group>
    )
}