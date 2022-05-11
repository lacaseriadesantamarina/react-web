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
    max-height: 80%;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    color: #fff;
    padding-top: 20vh;
    

    h2,h1,p{
        padding: 0 50% 0 50%;
        letter-spacing: 3px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        text-align: center;
        
    }
    h2{
        font-size: 4rem;
    }
    h1{
        font-size: 20rem;
    }
    p {
        font-size: 2rem;
    }


    
    @media screen and (max-width:950px) {
    width: 100%;
    margin-left:  -30vw;
     h2{
        font-size: 2rem;
    }
    h1{
        font-size: 10rem;
    }
    p {
        font-size: 1rem;
    }
    }
`;