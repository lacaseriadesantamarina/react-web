import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, 
HeroItems, 
HeroH1, 
HeroP, 
HeroBtn, 
HeroContent
} from './HeroElements';
import { Route } from 'react-router';



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