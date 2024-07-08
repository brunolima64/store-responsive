import { Cart } from '../Cart'
import * as C from './styles'

type Props = {
    setShowCart: () => void;
}
export const Header = ({ setShowCart }: Props) => {
    
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