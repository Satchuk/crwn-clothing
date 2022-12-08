import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import './checkout.styles.scss';
import { CheckOutItems } from "../../Components/checkoutItem/checkoutItem.component";

export const CheckOut = () => {
    const { cartItems ,totalAmt} = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Products</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
            {
                cartItems.map((cartItems) => {
                    return (
                        <CheckOutItems key={cartItems.id} cartItem={cartItems} />
                    )
                })
            }
            <span className="total">Total : {totalAmt}</span>
        </div>
    )
}