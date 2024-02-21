import React from "react"
import { Link } from "react-router-dom"
import"./NavBar.css"
import Contacto from "../contacto/contacto"
import logo from "../../assets/logo.jpg"
import logo2 from "../../assets/logo2.jpg"
import logo3 from "../../assets/logo3.jpg"








const NavBar = ()=>{
  
  return(
   <div>
      <nav className="navbar navbar-expand-sm">
      <div className="container-fluid background-navbar">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar-toggler">
        <a className="navbar-brand">
          <img className="logo" src={logo2} width="200px" alt="logo" />
        </a>
        <h2>Cortinas Metalicas Ramirez</h2>
        <ul className="navbar-nav d-flex justify-content-center align-items-center">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Inicio </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/contacto'>Contacto</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/trabajos' aria-disabled="true">trabajos</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
   </div>
        
  )
}
       
  
export default NavBar


    

    
        



            
            