import React from 'react'
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import NavbarSidebar from '../../components/NavbarSidebar';

export const MainPage = () => {
  
  return (
    <div>
        <NavbarSidebar/>        
        <Hero/>
        <Footer/>
    </div>
  );
}

export default MainPage;
