import { CartIconContainer,ShoppingIcon,ItemCount } from './cart-icon.styles';
import {ReactComponent as ShopIcon} from '../../images/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


export const CartIcon =()=>{
    const {isCartOpen, setIsCartOpen,cartCount} = useContext(CartContext)
    const toggleCartOpen =()=>{
        setIsCartOpen(!isCartOpen);
    }
    
    return(
        <CartIconContainer onClick={toggleCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}