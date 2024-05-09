import { ReactNode, createContext, useState } from "react";

type FormContextType = {
    name: string;
    cpf: string;
    email: string;
    city: string;
    street: string;
    addres: string;
    setName: (s: string)=>void;
    setCpf: (s: string)=>void;
    setEmail: (s: string)=>void;
    setCity: (s: string)=>void;
    setStreet: (s: string)=>void;
    setAddres: (s: string)=>void;

}
export const FormContext = createContext<FormContextType | null>(null);

type Props = {
    children: ReactNode;
}
export const FormProvider = ({children}: Props) => {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [addres, setAddres] = useState('');

    return (
        <FormContext.Provider value={{ name, setName, email, setEmail, cpf, setCpf, city, setCity, street, setStreet, addres, setAddres }}>
            {children}
        </FormContext.Provider>
    )
}