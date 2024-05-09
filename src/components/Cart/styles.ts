import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;

    &:hover {
            opacity: .7;
    }

    div {
        background-color: red;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-bottom: -8px;
        position: relative;
    }
    img  {
        width: 40px;
    }
`;