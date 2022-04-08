import React from 'react'
import { HeroContainer } from '../Hero/HeroElements';
import { NotFoundText } from './NotFoundElements'

const NotFound = () => {
  return (
    <HeroContainer>
        <NotFoundText>
          <h1>NOT FOUND</h1>      
        </NotFoundText>
    </HeroContainer>
  );
}

export default NotFound