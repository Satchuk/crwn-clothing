import { CartDropdownContainer ,EmptyMeassge,DrpCartItem} from './cart-dropdown.styles';
import { Button } from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {useNavigate} from 'react-router-dom';

export const Cartdropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const navigateToCheckout =()=>{
        navigate('/checkout')
    }
    return (
        <CartDropdownContainer>
            <DrpCartItem>
                {cartItems.length > 0? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)):
                <EmptyMeassge>Your cart is empty!</EmptyMeassge>
                }
            </DrpCartItem>
            <Button onClick={navigateToCheckout}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}