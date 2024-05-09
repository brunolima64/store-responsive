import { useContext, useState } from 'react';
import * as C from './styles'
import { ContextListCart } from '../../contexts/CartContext';
import { ProductType } from '../../type/ProductType';

type Props = {
    setShowCart: () => void;
    showCart: boolean;
    priceTotal: number;
    handleMinus: (item: ProductType) => void;
    handlePlus: (item: ProductType) => void;
    setShowForm: (s: boolean) => void;
}
export const CartModal = ({ setShowCart, showCart, priceTotal, handleMinus, handlePlus, setShowForm }: Props) => {
    const cartCtx = useContext(ContextListCart);

    const handleShowFormModal = () => {
        setShowForm(true);
    }

    return (
        <C.Container showCart={showCart}>
            <C.Prev onClick={setShowCart}>Voltar</C.Prev>
                {cartCtx?.listCart.map((item, i) => (
                    <C.ItemCart key={i}>
                        <C.ImgArea>
                            <img src={item.image[0]} alt={item.title}  />
                        </C.ImgArea>
                        <C.InfoArea>
                            <p className='title'>{item.title}</p>
                            <p className='price'>R$: {(item.price * item.qt).toFixed(2)}</p>
                        </C.InfoArea>
                        <C.QuantityArea>
                            <div className='count' onClick={()=>handleMinus(item)}>-</div>
                            <div>{item.qt}</div>
                            <div className='count' onClick={()=>handlePlus(item)}>+</div>
                        </C.QuantityArea>
                    </C.ItemCart>
                ))}

            {cartCtx?.listCart && cartCtx?.listCart.length > 0 &&
                <div>
                    <div className='total'>
                        <p><strong>Frete: R$</strong> 00.00</p>
                        <p><strong>Subtotal:</strong> R$ {priceTotal.toFixed(2)}</p>
                        <p><strong>Total:</strong> R$ {priceTotal.toFixed(2)}</p>
                    </div>

                    <div className='area-button'>
                        <button onClick={handleShowFormModal}>Finalizar Compra</button>
                    </div>
                </div>
            }

            
            {cartCtx?.listCart && cartCtx?.listCart.length === 0 &&
                <p className='warning'>Não há itens no carrinho.</p>
            }

        </C.Container>
    )
}