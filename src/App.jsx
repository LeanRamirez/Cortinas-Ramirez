import React from 'react'
import {Route, Routes} from 'react-router-dom'


import NavBar from './components/navBar/navBar';
import Trabajos from './components/trabajos/trabajos';
import Carrusel from './components/carrusel/carrusel';
import Footer from './components/footer/footer';
import About from './components/about/about';
import WhatsAppIcon from './components/whatsappIcon/whatsAppIcon';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Agregar todos los iconos sólidos a la biblioteca
library.add(fas);

import style from "./app.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Contacto from './components/contacto/contacto';




function App() {
 

  return (
    <div className={style.contenedor}>
      <NavBar/>
      <WhatsAppIcon/>
        <Routes>
          <Route path='/' element={<Carrusel/>}/>
          <Route path='trabajos' element={<Trabajos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/about' element= {<About/>}/>
        </Routes>
        <br/>
      <Footer/>
    </div>
  )
}

export default App
      
        
      
      
      
      
