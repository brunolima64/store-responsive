import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100%;
    background-color: black;
    color: white;
`;

export const Header = styled.div`
    max-width: 1000px;
    height: 70px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;

    .logo {
        cursor: pointer;
        
        span {
            margin-left: 5px;
            font-size: 25px;
            font-weight: bold;
        }
    }
`;
