import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Carta from "./components/Carta";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Reservar from "./components/Reservar";

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <Router>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle} /> 
        <Routes>
          <Route path="*" element={<NavbarSidebar />}/>
          <Route exact path='/' element={<Hero />}/>
          <Route exact path='/carta' element={<Carta />}/>
          <Route exact path='/reservar' element={<Reservar />}/> 
        </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

function NavbarSidebar() {

  return (
    <div>

    </div>
  );
}

export default App;
