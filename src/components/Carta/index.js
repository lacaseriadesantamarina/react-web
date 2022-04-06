import React from 'react'
import { CartaContainer, CartaH1, CartaImg } from './CartaElements';
import imgCarta from '../../img/cartamini.jpg'
const Carta = () => {
  return (
    <CartaContainer>
        <CartaH1 id="CartaId">Carta</CartaH1>
        <CartaImg src={imgCarta} max-width='100%'/>
    </CartaContainer>
  );
}

export default Carta;
