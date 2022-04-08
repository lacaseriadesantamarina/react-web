import React from 'react'
import Footer from '../../components/Footer';
import NavbarSidebar from '../../components/NavbarSidebar';
import NotFound from '../../components/NotFound';

const NotFoundPage = () => {
  return (
    <div>
        <NavbarSidebar/>
        <NotFound/>
        <Footer/>
    </div>
  )
}

export default NotFoundPage