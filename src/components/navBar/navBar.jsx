
import React from "react"
import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import logo2 from "../../assets/logo2.jpg"

const NavBar = ()=>{
  return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className={`container-fluid ${style.containerCustom}`}>
        <a className="navbar-brand">
        <img className={style.logo} src={logo2} alt="logo" />
      </a>
        <h2 className={`navbar-brand d-none d-sm-block ${style.logoName}`}>CORTINAS METALICAS RAMIREZ</h2>
    <button className={`navbar-toggler active d-md-none ${style.button}`} 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavDarkDropdown" 
      aria-controls="navbarNavDarkDropdown" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      MENU
    </button>
    <div className={`collapse navbar-collapse ${style.menu}`} id="navbarNavDarkDropdown">
      <ul className={`navbar-nav dropdown-menu dropdown-menu-dark dropdown-menu-md-end${style.navBarMenu}`}>
      <li className="nav-item">
        <NavLink 
          className={`nav-link active ${style.link}`} aria-current="page" 
          to='/inicio'>Inicio </NavLink>
      </li>
      <li className="nav-item">                 
        <NavLink 
          className={`nav-link active ${style.link}`}
          aria-current="page" 
          to='/contacto'>Contacto</NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={`nav-link active ${style.link}`}
          aria-current="page" 
          to='/trabajos'>Trabajos</NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={`nav-link active ${style.link}`} 
          to='/about' 
          aria-disabled="true">Sobre nosotros</NavLink>
          </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
export default NavBar;











    

    
        



            
            