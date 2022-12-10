import { Fragment ,useContext} from "react";
import { Outlet ,Link } from "react-router-dom";
import crown from '../../images/crown.svg';
import { NaviagtionContainer,Navlinks,NavLinksContainer,LogoContainer } from "./navigation.styles";
// import '../../Components/cartDropdown/cart-dropdown.styles.scss';
import { UserContext } from "../../contexts/context.component";
import { signoutUser } from "../../utils/firebase/firebaseUtils";
import { CartIcon } from "../../Components/cartIcon/cartIncon.component";
import { Cartdropdown } from "../../Components/cartDropdown/cartdropdown.component";
import { CartContext } from "../../contexts/cart.context";
export const Naviagtion =()=>{
    const {currentuser,} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

  
    return(
        <Fragment>
            <NaviagtionContainer>
                <LogoContainer to='/'><img className="logo" alt="crown" src={crown}/></LogoContainer>
                <NavLinksContainer>
                    <Navlinks  to='/shop'>Shop</Navlinks>
                    {currentuser ?(<Navlinks as='span' onClick={signoutUser}>Sign Out</Navlinks>):
                    <Navlinks  to='/auth'>SignIn</Navlinks>}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen &&<Cartdropdown/>}
            </NaviagtionContainer>
            <Outlet/>
        </Fragment>
        
    )
}