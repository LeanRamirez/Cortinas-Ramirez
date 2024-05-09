import React from "react"
import { NavLink } from "react-router-dom"
import style from "./NavBar.module.css"
import logo2 from "../../assets/logo2.jpg"
import logo4 from "../../assets/logo4.jpg"


const NavBar = ()=>{
  return(
   <div >
      <nav className='navbar navbar-expand-sm'>
        <div className={style.containerCustom}>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className={`collapse navbar-collapse ${style.navbarNav}`} id="navbar-toggler">
          <a className="navbar-brand">
            <img className={style.logo} src={logo2} alt="logo" />
          </a>
          <h2>CORTINAS METALICAS RAMIREZ</h2>
          
            <ul className="navbar-nav">
              <li >
                <NavLink className={style.link} aria-current="page" to='/'>Inicio </NavLink>
              </li>
              <li >
                <NavLink className={style.link} to='/contacto'>Contacto</NavLink>
              </li>
              <li >
                <NavLink className={style.link} to='/trabajos' aria-disabled="true">Trabajos</NavLink>
              </li>
              <li >
                <NavLink className={style.link} to='/about' aria-disabled="true">Sobre nosotros</NavLink>
              </li>
            </ul>
          
        </div>
      </div>
  </nav>
   </div>
        
  )
}
       
  
export default NavBar











    

    
        



            
            