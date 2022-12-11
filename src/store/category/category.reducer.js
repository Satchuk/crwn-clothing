import { Categories_type } from "./user.types";
export const Categories_initial_state={
    categoriesMap :[]
}

export const categoriesReducer = (state = Categories_initial_state , action={})=>{
    console.log('action',action,state)
    const {type ,payload} = action;

    switch(type){
        case Categories_type.SET_CATEGORIES_MAP:
                return {...state,categoriesMap :payload};
        default:
            return state;

    }
}