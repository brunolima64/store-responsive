
import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { ContextListCart } from "../contexts/CartContext";

export const GenerateMessage = () => {

    const formCtx = useContext(FormContext);
    const cartCtx = useContext(ContextListCart);

    let orderProducts = [];
    
    if(cartCtx?.listCart) {
        for(let item of cartCtx?.listCart) {
            orderProducts.push(`${item.qt}x ${item.title}`);
        }
    }

    return `**Dados do cliente:**
Nome: ${formCtx?.name}
Endereço: ${formCtx?.street} (${formCtx?.addres})
${formCtx?.city}/SP,
------
**Pedido:**
${orderProducts.join("\n")}
`;
}