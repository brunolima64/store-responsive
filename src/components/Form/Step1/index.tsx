import { useContext } from "react"
import { FormContext } from "../../../contexts/FormContext"
import * as C from './styles';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z.object({//schema de validação do zod
    name: z.string().min(2, { message: 'Caracteres minimos 2!'}),
    cpf: z.string().min(12, { message: 'CPF Inválido!'}),
    email: z.string().email({ message: 'Email precisa ser válido!'}).optional()
});

type Props = {
    setCurrentStep: (n: number) => void;
    setShowForm: (s: boolean) => void;
}
export const Step1 = ({ setCurrentStep, setShowForm }: Props) => {
    const formCtx = useContext(FormContext);//context do formulario

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(Schema) 
    });

    //Função para setar as info no context e ir para o proximo form "step".
    const handleStep = (data: any) => {
        formCtx?.setName(data.name);
        formCtx?.setCpf(data.cpf);
        formCtx?.setEmail(data.email);
        setCurrentStep(2);
    }

    //função para fechar o modal e resetar o step do form.
    const handleCloseModal = () => {
        setShowForm(false);
        setCurrentStep(1);
    }

    return (
        <C.Form onSubmit={handleSubmit(handleStep)}>
            <C.Prev onClick={handleCloseModal}>X</C.Prev>
            <C.Title>Dados pessoais</C.Title>
            
            <C.AreaInput>
                <label>Nome:</label>
                <C.Input 
                     {...register('name')}
                     placeholder="Digite seu nome"
                 />
                 {errors.name && <p>{errors.name.message as String}</p>}
            </C.AreaInput>

            <C.AreaInput>
                <label>CPF:</label>
                <C.Input
                    {...register('cpf')}
                    placeholder="Digite seu CPF. Ex: (999.999.999-99)"
                />
                {errors.cpf && <p>{errors.cpf.message as String}</p>}
            </C.AreaInput>
            
            <C.AreaInput>
                <label>E-mail:</label>
                <C.Input 
                    {...register('email')}
                    placeholder="Digite seu email"
                />
                {errors.email && <p>{errors.email.message as String}</p>}
            </C.AreaInput>

            <C.ButtonArea>
                <button>Próximo</button>
            </C.ButtonArea>
        </C.Form>
    )
}