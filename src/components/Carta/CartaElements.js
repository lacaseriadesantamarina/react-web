import styled from 'styled-components';
import imgBg from '../../img/fondocarta2.jpg';

export const CartaContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.7)),
    url(${imgBg});
    text-align: center;
`

export const CartaH1 = styled.h1`
  font-size: clamp(2rem, 6vw, 5rem);
  letter-spacing: 3px;
  color: #fff;
  padding-top: 5.5rem;
  padding-bottom: 2rem;
`

export const CartaImg = styled.img`
  align: center;
  width: 100%;
  max-width: 956px;
  padding-bottom: 4rem;
  //border: 5px solid #00cd62;
`