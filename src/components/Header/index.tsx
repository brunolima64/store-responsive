import { Cart } from '../Cart'
import * as C from './styles'

type Props = {
    setShowCart: () => void;
    showCart: boolean;
}
export const Header = ({ setShowCart, showCart }: Props) => {
    
    return (
        <C.PageContainer>
            <C.Header>
                <div className='logo'>
                    <p>Loja<span>Simples</span></p>
                </div>
                <div>
                    <Cart setShowCart={setShowCart} />
                </div>
            </C.Header>
        </C.PageContainer>
    )
}