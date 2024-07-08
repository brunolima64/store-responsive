import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    padding: 20px;
    border-radius: 6px;
    background-color: #FFF;

    img {
        width: 200px;
        height: auto;
        flex: 1;
    }

    .title {
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin: 10px;
    }
    
    .price {
        font-size: 17px;
        text-align: end;
    }
    
    button {
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 14px;
        background-color: black;
        color: white;
        cursor: pointer;
        border: 0;

        &:hover {
            opacity: .7;
        }
    }


    @media (max-width: 1050px) {
        
        width: 200px;
        margin: 5px;

        img {
            width: 100%;
        }
        .title {
            font-size: 18px;
        }

        .price {
            font-size: 14px;
        }
    }

    @media (max-width: 500px) {
        max-width: 110px;
        margin: 5px;
        img {
            width: 100px;
        }

        .title {
            font-size: 15px;
        }

        .price {
            font-size: 13px;
        }

        button {
            padding: 5px 10px; 
            font-size: 12px; 
        }
    }
`;