import styled from "styled-components";
import imgBg from '../../img/fondo1.jpg'

export const NotFoundContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), url(${imgBg});
    height: 87vh;
    background-width: 100%;
    background-position: center;
    background-size: cover;
`;

export const NotFoundText = styled.div`
      display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    size: 50px;
    justify-content: center;
    color: #fff;
    .h1{
        font-size: clamp(2rem, 6vw, 5rem);
        margin-bottom: 1rem;
        box-shadow: 3px 5px #00622f;
        letter-spacing: 3px;
        text-align:
    }
        @media screen and (max-width: 650px) {
    width: 100%;
    }
`;