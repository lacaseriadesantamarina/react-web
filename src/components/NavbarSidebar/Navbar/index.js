import React from 'react'
import {NavIcon, NavLink, Bars, NavContainer} from './NavbarElements'

export const Navbar = ({toggleOpen}) => {
  return (
    
        <NavContainer>
            <NavLink  to="/">La Casería de Santa Marina</NavLink>
            <NavIcon onClick={toggleOpen} >
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </NavContainer>
    
  )
}

export default Navbar