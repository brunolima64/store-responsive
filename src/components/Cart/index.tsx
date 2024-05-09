import * as C from './styles'
import CART from "../../../public/assets/images/icons8-cart-48 (2).png";
import { useContext } from 'react';
import { ContextListCart } from '../../contexts/CartContext';

type Props = {
    setShowCart: () => void;
}
export const Cart = ({ setShowCart }: Props) => {
    const cartCtx = useContext(ContextListCart);
    
    return (
        <C.Container onClick={setShowCart}>
            {cartCtx?.listCart && cartCtx?.listCart.length > 0 &&
                <div></div>
            }
            <img src={CART} alt="" />
        </C.Container>
    )
}