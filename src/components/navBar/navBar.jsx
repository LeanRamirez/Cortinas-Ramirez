import React from "react"
import { Link } from "react-router-dom"
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
        <div className={`collapse navbar-collapse ${style.navbarNav}`}  id="navbar-toggler">
          <a className="navbar-brand">
            <img className={style.logo} src={logo4} alt="logo" />
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='/'>Inicio </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contacto'>Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/trabajos' aria-disabled="true">Trabajos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about' aria-disabled="true">Sobre nosotros</Link>
            </li>
          </ul>
        </div>
      </div>
  </nav>
   </div>
        
  )
}
       
  
export default NavBar


    

    
        



            
            