import { createContext,useState,useEffect } from "react";

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

export const CartProvider =({children})=>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setcartItems] = useState([]);
    const [cartCount,setcartCount] = useState(0);
    let [totalAmt,settotalAmt] = useState(0);

    useEffect(()=>{
        const newCartcount = cartItems.reduce((total,cartItem)=> total+cartItem.quantity,0);
        setcartCount (newCartcount);
    },[cartItems]);

    useEffect(()=>{
        const newCartAmt = cartItems.reduce((total,cartItem)=> total+cartItem.quantity * cartItem.price,0);
        settotalAmt (newCartAmt);
    },[cartItems])

    const addItems = (productToAdd)=>{
        setcartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromcart = (cartToRemove)=>{
        setcartItems(removeCartItem(cartItems,cartToRemove));
    }

    const deleteCartItem =(deleteItem)=>{
        setcartItems(deleteCart(cartItems,deleteItem));
    }

    const value = {isCartOpen,setIsCartOpen,addItems,cartItems,cartCount,removeItemFromcart,deleteCartItem,totalAmt};

 
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}