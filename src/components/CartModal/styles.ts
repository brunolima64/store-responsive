import styled from "styled-components";

type Props = {
    showCart: boolean;
}
export const Container = styled.div<Props>`   
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    border-left: 1px solid #fff;
    box-shadow: 0 0 30px white;
    color: #FFF;
    width: ${props => props.showCart ? '400px' : '0px'};
    overflow-y: scroll;
    transition: all ease .7;
    position: fixed;

    .total {
        padding: 10px;
        margin-top: 40px;
        margin-bottom: 40px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .area-button {
        display: flex;
        justify-content: center;

        button {
        width: 300px;
        padding: 10px 20px;
        border-radius: 6px;
        font-size: 14px;
        background-color: #FFF;
        color: #000;
        cursor: pointer;
        border: 0;

            &:hover {
                opacity: .7;
            }
        }
    }

    .warning {
        text-align: center;
    }

    @media (max-width: 400px) {
        max-width: ${props => props.showCart ? '320px' : '0px'};
        
        .area-button {
            button {
                margin: 0px 20px;
            }
        }
    }
`;

export const Prev = styled.div`
    margin: 0;
    margin-bottom: 40px;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
    cursor: pointer;

    &:hover {
        color: #999;
    }
`;


export const ItemCart = styled.div`
display: flex;
align-items: center;
gap: 10px;
background-color: #fff;
border-bottom: 1px solid #fff;
border-radius: 10px;
padding: 10px;
margin: 10px;
color: #000;


`;

export const ImgArea = styled.div`
width: 100px;
height: 100px;
margin: 0 10px;
    img {
        width: 100%;
    }

    @media (max-width: 400px) {
        width: 80px;
        height: 80px;
        margin: 0 7px;
    }
`;

export const InfoArea = styled.div`
    flex: 1;

    .title {
        font-size: 16px;
        font-weight: bold;
    }
    .price {
        font-size: 14px;
    }

    @media (max-width: 400px) {
        .title {
            font-size: 14px; 
        }
        .price {
            font-size: 13px;
        }
    }
`;

export const QuantityArea = styled.div`
display: flex;
align-items: center;
font-size: 16px;

    .count {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        margin: 0 10px;
        background-color: #000;
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
    }

    @media (max-width: 400px) {
        font-size: 14px;

        .count {
            width: 23px;
            height: 23px;
    }
    }
`;


