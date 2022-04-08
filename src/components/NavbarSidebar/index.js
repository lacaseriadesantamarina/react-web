import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import React from 'react'
import { NavbarSidebarContainer } from "./NavbarSidebarElements";
import ToggleOpen from './../../scripts/toggle'

export const NavbarSidebar = () => {
    const [isOpen, toggleOpen] = ToggleOpen();

    return (
        <NavbarSidebarContainer>
        <Navbar toggleOpen={toggleOpen}/>
        <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
        </NavbarSidebarContainer>
  );
}

export default NavbarSidebar;