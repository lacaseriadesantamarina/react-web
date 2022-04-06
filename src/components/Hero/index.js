import React from 'react';
import {HeroContainer, 
HeroItems, 
HeroH1, 
HeroP, 
HeroBtn, 
HeroContent
} from './HeroElements';



const Hero = () => {



  return (
    <HeroContainer>
        <HeroContent>
        <HeroItems>
          <HeroH1>Reserva tu mesa</HeroH1>
          <HeroP>Selecciona entre nuestros horarios disponibles</HeroP>
          <HeroBtn to="/reservar">Haz tu reserva</HeroBtn> 
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;