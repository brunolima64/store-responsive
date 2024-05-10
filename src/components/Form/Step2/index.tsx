import { useContext } from "react";
import { FormContext } from "../../../contexts/FormContext";
import * as C from './styles';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


const Schema = z.object({ //schema de validação do zod
    addres: z.string().min(2, { message: 'Caracteres minimos 2!'}),
    city: z.string().min(2, { message: 'Caracteres minimos 2!'}),
    street: z.string().min(1, { message: 'Digite um numero válido!'})
});

type Props = {
    setCurrentStep: (n: number) => void;
    setShowForm: (s: boolean) => void;
}
export const Step2 = ({ setCurrentStep, setShowForm }: Props) => {
    const formCtx = useContext(FormContext);//context do formulario

    const { register, handleSubmit, formState: { errors }} = useForm({ 
        resolver: zodResolver(Schema) 
    });

    //Função para setar as info no context e ir para o proximo form "step".
    const handleStep = (data: any) => { 
        formCtx?.setStreet(data.street);
        formCtx?.setCity(data.city);
        formCtx?.setAddres(data.addres);
        setCurrentStep(3);
    }

    //função para fechar o modal e resetar o step do form.
    const handleCloseModal = () => { 
        setShowForm(false);
        setCurrentStep(1);
    }
    
    return (
        <C.Form onSubmit={handleSubmit(handleStep)}>
            <C.Prev onClick={handleCloseModal}>X</C.Prev>
            <C.Title>Endereço</C.Title>
            
            <C.AreaInput>
                <label>Bairro:</label>
                <C.Input 
                    {...register('city')}
                    placeholder="Digite seu bairro"
                />
                {errors.city && <p>{errors.city.message as String}</p>}
            </C.AreaInput>

            <C.AreaInput>
                <label>Rua:</label>
                <C.Input
                    {...register('street')}
                    placeholder="Digite o nome da sua rua"
                />
                {errors.street && <p>{errors.street.message as String}</p>}
            </C.AreaInput>

            <C.AreaInput>
                <label>Numero:</label>
                <C.Input 
                    {...register('addres')}
                    placeholder="Digite o numero da sua casa"
                />
                {errors.addres && <p>{errors.addres.message as String}</p>}
            </C.AreaInput>

            <C.ButtonArea>
                <button>Próximo</button>
            </C.ButtonArea>
        </C.Form>
    )
}