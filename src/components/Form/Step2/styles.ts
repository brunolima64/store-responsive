import styled from "styled-components";

export const Form = styled.form`
    width: 350px;
    padding: 30px 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 0px 2px #ccc;
    border-radius: 12px;

    @media (max-width: 400px) {
        width: 250px;
        padding: 15px 15px;
    }
`;
export const Prev = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    font-size: 20px;
    text-align: center;
    cursor: pointer;

    &:hover {
        opacity: .7;
    }
`;
export const Title = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;
`;

export const AreaInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 17px 0;
`;

export const Input = styled.input`
    margin-top: 7px;
    font-size: 16px;
    outline: none;
    padding: 10px;
    color: #fff;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid gray;

    @media (max-width: 400px) {
        font-size: 14px;
    }
`;

export const ButtonArea = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
        font-size: 16px;
        outline: none;
        border-radius: 6px;
        border: 0;
        padding: 10px;
        cursor: pointer;

        &:hover {
            opacity: .7;
        }
    }

    @media (max-width: 400px) {
        
        button {
            font-size: 14px;
        }
    }
`;
