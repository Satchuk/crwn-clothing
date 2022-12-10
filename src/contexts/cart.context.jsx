import { useReducer } from "react";
import { createContext,useState,useEffect } from "react";
import { CreateAction } from "../utils/reducers/reducers.utils";

const addCartItem =(cartItem,productToAdd)=>{
    const existingCartItem = cartItem.find((cartItem)=> cartItem.id === productToAdd.id);
    if(existingCartItem){
        return cartItem.map((cartItem)=>cartItem.id === productToAdd.id ?
        {...cartItem, quantity : cartItem.quantity + 1}:cartItem)
    }
    console.log([...cartItem,{...productToAdd,quantity:1 }]);
    return [...cartItem,{...productToAdd,quantity:1 }]
}

const removeCartItem=(cartItems,cartToRemove)=>{
    const existingCartItem = cartItems.find((cartItems)=> cartItems.id === cartToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItems)=> cartItems.id != cartToRemove.id);
    }

    return cartItems.map((cartItems)=>cartItems.id === cartToRemove.id ?
    {...cartItems, quantity : cartItems.quantity - 1}:cartItems)
}

const deleteCart=(cartItems , deleteItem)=>{
    return cartItems.filter((cartItems)=> cartItems.id != deleteItem.id);
}

export const CartContext =createContext({
    isCartOpen : false,
    setIsCartOpen:()=>{},
    cartItems : [],
    addItems :()=>{},
    cartCount :0,
    removeItemFromcart :()=>{},
    deleteCartItem:()=>{},
    totalAmt : 0
});

const Init_state ={
    isCartOpen : false,
    cartItems : [],
    cartCount :0,
    totalAmt : 0
}



const cartReducer = (state ,action)=>{
    const {type,payload} = action;

    switch(type){
        case 'ADD_TO_CART':
            return{
                ...state,
                ...payload
            }
        case 'SET_CART_OPEN':
            return{
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type o f ${type} in cartReducer`)
    }
}

export const CartProvider =({children})=>{

    const [{cartItems ,isCartOpen,cartCount,totalAmt} , dispatch] = useReducer(cartReducer,Init_state);

    const UpdateCartItemsReducer =(newCartItem)=>{
        const newCartcount = newCartItem.reduce((total,cartItem)=> total+cartItem.quantity,0);
       
        const newCartAmt = newCartItem.reduce((total,cartItem)=> total+cartItem.quantity * cartItem.price,0);
        
        dispatch(
            CreateAction('ADD_TO_CART',{
                cartItems: newCartItem, 
                cartTotal : newCartAmt, 
                cartCount: newCartcount})
        );

    }

    const addItems = (productToAdd)=>{
        const newCartItems = addCartItem(cartItems,productToAdd);
        UpdateCartItemsReducer(newCartItems);
    }

    const removeItemFromcart = (cartToRemove)=>{
        const newCartItems = removeCartItem(cartItems,cartToRemove);
        UpdateCartItemsReducer(newCartItems);
    }

    const deleteCartItem =(deleteItem)=>{
        const newCartItems = deleteCart(cartItems,deleteItem);
        UpdateCartItemsReducer(newCartItems);
    }

    const setIsCartOpen=(bool)=>{
        dispatch(
            CreateAction('SET_CART_OPEN',bool)
        );
    }

    const value = {isCartOpen,setIsCartOpen,addItems,cartItems,cartCount,removeItemFromcart,deleteCartItem,totalAmt};

 
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}