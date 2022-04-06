import React from 'react'
import {Nav, NavIcon, NavLink, Bars} from './NavbarElements'

export const Navbar = ({toggle}) => {
  return (
    
        <Nav>
            <NavLink  to="/">La Casería de Santa Marina</NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars/>
            </NavIcon>
        </Nav>
    
  )
}

export default Navbar