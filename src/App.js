import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalStyle } from "./globalStyles";
import CartaPage from "./pages/CartaPage";
import MainPage from './pages/MainPage';
import NotFoundPage from "./pages/NotFoundPage";
import ReservarPage from "./pages/ReservarPage";

function App() {

  return (
    <div>
    <Router>
        <GlobalStyle/>
          <Routes>
            <Route path="*" element={<NotFoundPage />}/>
            <Route exact path='/' element={<MainPage />}/>
            <Route exact path='/carta' element={<CartaPage />}/>
            <Route exact path='/reservar' element={<ReservarPage />}/> 
          </Routes>
        </Router>
      </div>
  );
}

export default App;
