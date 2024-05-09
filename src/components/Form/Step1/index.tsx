import { useContext } from "react"
import { FormContext } from "../../../contexts/FormContext"
import * as C from './styles';

type Props = {
    setCurrentStep: (n: number) => void;
    setShowForm: (s: boolean) => void;
}
export const Step1 = ({ setCurrentStep, setShowForm }: Props) => {
    const formCtx = useContext(FormContext);

    const handleStep = () => {
        if(formCtx?.name !== '' && formCtx?.email !== '' && formCtx?.cpf !== '') {
            setCurrentStep(2);
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
            <C.Title>Dados pessoais</C.Title>
            
            <C.AreaInput>
                <label>Nome:</label>
                <C.Input 
                    type="text"
                    placeholder="Digite seu nome"
                    value={formCtx?.name}
                    onChange={e => formCtx?.setName(e.target.value)}
                 />
            </C.AreaInput>

            <C.AreaInput>
                <label>CPF:</label>
                <C.Input
                    type="text"
                    placeholder="Digite seu CPF. Ex: (999.999.999-99)"
                    value={formCtx?.cpf}
                    onChange={e => formCtx?.setCpf(e.target.value)} 
                />
            </C.AreaInput>
            
            <C.AreaInput>
                <label>E-mail:</label>
                <C.Input 
                    type="text"
                    placeholder="Digite seu email"
                    value={formCtx?.email}
                    onChange={e => formCtx?.setEmail(e.target.value)} 
                />
            </C.AreaInput>

            <C.ButtonArea>
                <button onClick={handleStep}>Próximo</button>
            </C.ButtonArea>
        </C.Form>
    )
}