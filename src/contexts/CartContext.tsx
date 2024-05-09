import { ReactNode, createContext, useState } from "react";
import { ProductType } from "../type/ProductType";

type ListProductsType = {
    listCart: ProductType[];
    setListCart: (item: any) => void;
}
export const ContextListCart = createContext<ListProductsType | null>(null);

type Props = { children: ReactNode; } 
export const ListProductsProvider = ({children}: Props) => {
    const [listCart, setListCart] = useState([]);

    return (
        <ContextListCart.Provider value={ {listCart, setListCart} }>
            {children}
        </ContextListCart.Provider>
    )
}