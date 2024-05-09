import { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import * as C from './styles';

type Props = {
    setCurrentStep: (n: number) => void;
    setShowForm: (s: boolean) => void;
}
export const Step2 = ({ setCurrentStep, setShowForm }: Props) => {
    const formCtx = useContext(FormContext);

    const handleStep = () => {
        if(formCtx?.addres !== '' && formCtx?.city !== '' && formCtx?.street !== '') {
            setCurrentStep(3);
        } else {
            alert('Preencha todos os campos!')
        }
    }

    const handleCloseModal = () => {
        setShowForm(false);
        setCurrentStep(1);
    }
    
    return (
        <C.Form>
            <C.Prev onClick={handleCloseModal}>X</C.Prev>
            <C.Title>Endereço</C.Title>
            <C.AreaInput>
                <label>Bairro:</label>
                <C.Input 
                    type="text"
                    placeholder="Digite seu bairro"
                    value={formCtx?.city}
                    onChange={e => formCtx?.setCity(e.target.value)}
                 />
            </C.AreaInput>
            <C.AreaInput>
                <label>Rua:</label>
                <C.Input
                    type="text"
                    placeholder="Digite o nome da sua rua"
                    value={formCtx?.street}
                    onChange={e => formCtx?.setStreet(e.target.value)} 
                />
            </C.AreaInput>
            <C.AreaInput>
                <label>Numero:</label>
                <C.Input 
                    type="text"
                    placeholder="Digite o numero da sua casa"
                    value={formCtx?.addres}
                    onChange={e => formCtx?.setAddres(e.target.value)} 
                />
            </C.AreaInput>

            <C.ButtonArea>
                <button onClick={handleStep}>Próximo</button>
            </C.ButtonArea>
        </C.Form>
    )
}