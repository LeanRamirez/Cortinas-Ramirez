
import React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import logo2 from "../../assets/logo2.jpg"

const NavBar = ()=>{

  const [menuOpen, setMenuOpen]= useState(true);

  const toggleMenu= ()=>{
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }

  const closeMenu=()=>{
    setMenuOpen(false);
  }


  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className={`container-fluid ${style.containerCustom}`}>
        <a className="navbar-brand">
        <img className={style.logo} src={logo2} alt="logo" />
      </a>
        <h2 className={`navbar-brand d-none d-sm-block ${style.logoName}`}>CORTINAS METALICAS RAMIREZ</h2>
      <button className={`navbar-toggler ${style.button}`} 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNavDarkDropdown" 
        aria-controls="navbarNavDarkDropdown" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        onClick={toggleMenu}>
        MENU
      </button>
      <div 
      className={`collapse navbar-collapse ${menuOpen ? "open" : ""} ${style.menu}`} 
      id="navbarNavDarkDropdown">
        <ul className={`navbar-nav  ${style.navBarMenu}`}>
        <li className={`nav-item ${style.item}`}>
          <NavLink 
            className={`nav-link active ${style.link}`} 
            aria-current="page" 
            to='/'
            onClick={closeMenu}
            >Inicio </NavLink>
        </li>
        <li className={`nav-item ${style.item}`}>                 
          <NavLink 
            className={`nav-link active ${style.link}`}
            aria-current="page" 
            to='/contacto'
            onClick={closeMenu}
            >Contacto</NavLink>
        </li>
        <li className={`nav-item ${style.item}`}>
          <NavLink
            className={`nav-link active ${style.link}`}
            aria-current="page" 
            to='/trabajos'
            onClick={closeMenu}
            >Trabajos</NavLink>
        </li>
        <li className={`nav-item ${style.item}`}>
          <NavLink 
            className={`nav-link active ${style.link}`} 
            to='/about' 
            aria-disabled="true"
            onClick={closeMenu}
            >Nosotros</NavLink>
            </li>
        </ul>
    </div>
  </div>
</nav>

  )
}
export default NavBar;











    

    
        



            
            