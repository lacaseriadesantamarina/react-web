import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgBg from '../../img/fondo1.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)),
    url(${imgBg});
    height: 87vh;
    background-width: 100%;
    background-position: center;
    background-size: cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-hight: 100%;
    width: 100vw;
    paing: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
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
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 6vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #00622f;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 2vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled(Link)`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #00622f;
  color: #fff;
  transition: 0.2s ease-out;
  text-decoration:none;
  &:hover {
    background: #00cd62;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
