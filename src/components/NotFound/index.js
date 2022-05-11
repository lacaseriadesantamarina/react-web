import React from 'react'
import { HeroContainer } from '../Hero/HeroElements';
import { NotFoundText } from './NotFoundElements'

const NotFound = () => {
  return (
    <HeroContainer>
        <NotFoundText>
          <h2>Error</h2> 
          <h1>404</h1>  
          <p>Página no encontrada</p>   
        </NotFoundText>
    </HeroContainer>
  );
}

export default NotFound