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


var links=['','carta','imagenes'];
var LinksDesc=['Inicio','Nuestra Carta','Imagenes del restaurante']


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
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