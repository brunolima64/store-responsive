import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover {
            opacity: .7;
    }

    div {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #FFF;
    }
    img {
        width: 60px;
        height: 60px;
        padding: 10px;
    }

    @media (max-width: 770px) {
        margin: 0;
        margin-right: 10px;
        flex-direction: row;
        width: 200px;
        height: 100px;

        div {
            width: 80px;
            height: 80px;
            margin-right: 10px;
        }
        img {
            width: 60px;
            height: 60px;
            padding: 10px;
        }
    }

    @media (max-width: 400px) {
        width: 140px;
        height: 80px; 

        div {
            width: 60px;
            height: 60px;
            margin-right: 10px;
        }
        img {
            width: 40px;
            height: 40px; 
        }

        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;