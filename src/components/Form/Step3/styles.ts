import styled from "styled-components";


export const Form = styled.div`
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
    font-size: 22px;
    margin: 10px 0;
    text-align: center;
    text-shadow: 0px 0px 4px #ccc;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #ccc;
    
    p {
        text-align: center;
        line-height: 25px;
        margin: 10px 0;
    }

    @media (max-width: 400px) {
        
        p {
            line-height: 20px;
            margin: 10px 0;
            font-size: 14px;
        }
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
