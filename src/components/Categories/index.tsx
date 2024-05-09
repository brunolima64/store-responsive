import * as C from './styles';

type Props = {
    title: string;
    image: string;
    setCategory: () => void;
}
export const Categories = ({ image, title, setCategory }: Props) => {
    return (
        <C.Container onClick={setCategory}> 
            <div>
                <img src={image} alt={image} />
            </div>
            <p>{title}</p>
        </C.Container>
    )
}