import { ProductType } from '../../type/ProductType'
import * as C from './styles'

type Props = {
    item: ProductType;
    handleAddItem: (item: any) => void;
}
export const Products = ({item, handleAddItem}: Props) => {
    return (
        <C.Container> 
            <p className='title'>{item.title}</p>
            <img src={item.image[0]} alt="" />
            
            <p className='price'>R$ {item.price}</p>

            <button onClick={handleAddItem}>Adicionar ao Carrinho</button>
        
        </C.Container>
    )
}