import styled from 'styled-components';
import { shade } from "polished";

import bg from '../../assets/bg2.png';

export const Container = styled.div`
    height: 100%;
    display: flex;
    background: url(${bg});
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    width: 900px;
    height: 470px;
    display: flex;

    @media(max-width: 900px) {
        width: 350px;
    }

`;


export const Background = styled.div`
    width: 468px;
    height: 100%;
    background: #EFAC36;
    border-radius: 10px 0 0 10px;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        right: 20px;
    }

    @media(max-width: 900px) {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 432px;
    padding: 20px 60px;

    h1 {
        text-align: left;
        margin-bottom: 20px;
    }

    span {
        display: flex;
        align-items: center;
        text-align: center;

        ::before, ::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #E2E2E2;
        }

        :not(:empty)::before {
            margin-right: .25em;
        }

        :not(:empty)::after {
            margin-left: .25em;
        }

        margin: 10px 0;
        color: #E2E2E2;
        
        text-align: center;
    }

    p {
        color: #666;
        text-align: center;
        font-size: 12px;
        font-weight: 600;
        margin-top: 40px;

        a {
            color: #EFAC36;
            font-weight: 700;
            cursor: pointer;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, "#EFAC36")};
            }
        }
    }

    @media(max-width: 900px) {
        padding: 20px 30px;
    }
 
`;

export const Input = styled.input`
    background: #F7F7F7;
    color: #9AA3AB;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    font-size: 12px;
    border: none;
    padding: 0 15px;
    font-weight: 700;

    & + input {
        margin-top: 12px;
    }

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #C4C9CE;
        font-weight: 600;
    }
    :-ms-input-placeholder {
        color: #C4C9CE;
        font-weight: 600;
    }

`;

export const Button = styled.button`
    background: #EFAC36;
    border-radius: 10px;
    border: 0;
    color: #fff;
    height: 50px;
    width: 100%;
    font-weight:600;
    font-size: 14px;
    margin-top: 20px;
    transition: background 0.2s;
   
    &:hover {
        background: ${shade(0.2, "#EFAC36")};
    }
`;

export const SignInSocial = styled.div`
    display: flex;
`;

export const ButtonFace = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #566495;
    color: #fff;
    font-size: 14px;
    height: 50px;
    width: 100%;
    margin-right: 20px;
    border: 0;
    border-radius: 10px;
    font-weight: 600;
    transition: background 0.2s;

    svg {
        margin-right: 5px;
    }

    &:hover {
        background: ${shade(0.2, "#566495")};
    }
`;

export const ButtonGoogle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: #4385F5;
    color: #fff;
    font-size: 14px;
    height: 50px;
    width: 100%;
    border: 0;
    font-weight: 600;
    border-radius: 10px;
    transition: background 0.2s;

    svg {
        margin-right: 5px;
    }

    &:hover {
        background: ${shade(0.2, "#4385F5")};
    }
`;