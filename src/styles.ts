import styled from "styled-components";

export const PageContainer = styled.div`
    overflow-y: auto;
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 1000px;
    margin: auto;

    @media (max-width: 1050px) {
        width: 600px;
    }
    @media (max-width: 700px) {
        width: 330px;
    }
    @media (max-width: 400px) {
        width: 300px;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .categories {
        display: flex;
        align-items: center;
        margin: 40px 0;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-bottom: 40px;
    }

    @media (max-width: 1050px) {

        .products {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 770px) {

        .categories {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .products {
            grid-template-columns: repeat(2, 1fr);
        }
    }


`;

export const FormModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    position: fixed;
    opacity: .9;
`;

export const FormModalArea = styled.div`
    background-color: #000;
    border-radius: 6px;
    color: white;
    position: absolute;
    margin: auto;
`;
