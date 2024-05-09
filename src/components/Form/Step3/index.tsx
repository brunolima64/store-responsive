import { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import * as C from './styles';

type Props = {
    setCurrentStep: (n: number) => void;
    setShowForm: (s: boolean) => void;
}
export const Step3 = ({ setCurrentStep, setShowForm }: Props) => {
    const formCtx = useContext(FormContext);
    
    const message = 'oi tudo bem?';
    const linkZap = `https://wa.me//${import.meta.env.VITE_NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`;
    
    const handleCloseModal = () => {
        setShowForm(false);
        setCurrentStep(1);
    }

    return (
        <C.Form>
             <C.Prev onClick={handleCloseModal}>X</C.Prev>
            <C.Title>Envio para o WhatsApp</C.Title>
            
            <C.Body>
                <p>Perfeito <strong>{formCtx?.name}</strong>!</p>
                <p>
                    Agora envie o seu pedido para o nosso WhatsApp para concluir.
                    Nosso atendente irá te guiar sobre o andamento do pedido.
                </p>
            </C.Body>

            <C.ButtonArea>
                <a href={linkZap} target="_blank">
                    <button onClick={handleCloseModal}>Enviar para o whatsApp</button>
                </a>
            </C.ButtonArea>
        </C.Form>
    )
}