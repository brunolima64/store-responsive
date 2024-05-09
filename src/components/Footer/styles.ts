import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;
    border-top: 1px solid gray;
    text-align: center;
    background-color: black;
    color: #FFF;
    bottom: 0;
    right: 0;
    left: 0;

    
    @media (max-width: 400px) {
        p {
            font-size: 13px;
        }
    }
`;