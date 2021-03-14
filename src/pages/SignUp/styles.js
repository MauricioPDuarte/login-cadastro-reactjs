import styled, { keyframes } from 'styled-components';
import { shade } from "polished";

import bg from '../../assets/bg2.png';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
    height: 100%;
    display: flex;
    background: url(${bg});
    position: relative;
    
    justify-content: center;
    align-items: center;
    

`;

export const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    width: 900px;
    height: 470px;
    display: flex;
    flex-direction: row-reverse;

    @media(max-width: 900px) {
        width: 350px;
    }

`;


export const Background = styled.div`
    width: 468px;
    height: 100%;
    background: #EFAC36;
    border-radius: 0 10px 10px 0;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        left: 20px;
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
    animation: ${appearFromRight} 0.7s;

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
