import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';




const Sidebar = ({isOpen, toggleOpen}) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleOpen}>
      <Icon onClick={toggleOpen}>
        <CloseIcon />
      </Icon>
      <SidebarMenu id="SidebarMenu">
          <SidebarLink to='/' >Inicio</SidebarLink>
          <SidebarLink to='/carta' >Nuestra Carta</SidebarLink>
          <SidebarLink to='/imagenes' >Imagenes del restaurante</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/reservar'>Reservar ahora</SidebarRoute>
      </SideBtnWrap>

    </SidebarContainer>
  );
};



export default Sidebar;