import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import logo2 from "../../assets/logo2.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className={`container-fluid ${style.containerCustom}`}>
        <a className="navbar-brand">
          <img className={style.logo} src={logo2} alt="logo" />
        </a>
        <h2 className={`navbar-brand d-none d-sm-block ${style.logoName}`}>
          CORTINAS METALICAS RAMIREZ
        </h2>

        <button
          className={`btn btn-primary d-md-none ${style.button}`}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          onClick={toggleMenu}
        >
          MENU
        </button>

        {/* <div
          className={`offcanvas offcanvas-end ${menuOpen ? 'show' : ''} ${style.containerMenu}`}
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        > */}
          <div className={` offcanvas-end ${style.menu}`}
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
          >
            <ul className={`navbar-nav ${style.navBarMenu}`}>
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
                  to="/contacto"
                  onClick={closeMenu}
                >
                  Contacto
                </NavLink>
              </li>
              <li className={`nav-item ${style.item}`}>
                <NavLink
                  className={`nav-link active ${style.link}`}
                  aria-current="page"
                  to="/trabajos"
                  onClick={closeMenu}
                >
                  Trabajos
                </NavLink>
              </li>
              <li className={`nav-item ${style.item}`}>
                <NavLink
                  className={`nav-link active ${style.link}`}
                  to="/about"
                  aria-disabled="true"
                  onClick={closeMenu}
                >
                  Nosotros
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
















// eslint-disable-next-line no-unused-vars
// import React from "react"
// import { useState } from "react"
// import { NavLink } from "react-router-dom"
// import style from "./NavBar.module.css"
// import logo2 from "../../assets/logo2.jpg"

// const NavBar = ()=>{

//   const [menuOpen, setMenuOpen]= useState(false);

//   const toggleMenu= ()=>{
//     setMenuOpen(!menuOpen)
//     console.log(menuOpen)
//   }

//   const closeMenu=()=>{
//     setMenuOpen(false);
//   }


//   return(
//     <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//       <div className={`container-fluid ${style.containerCustom}`}>
//         <a className="navbar-brand">
//         <img className={style.logo} src={logo2} alt="logo" />
//       </a>
//         <h2 className={`navbar-brand d-none d-sm-block ${style.logoName}`}>CORTINAS METALICAS RAMIREZ</h2>
        
//         <button 
//           className={`btn btn-primary d-md-none ${style.button}`} 
//           type="button" 
//           data-bs-toggle="offcanvas" 
//           data-bs-target="#offcanvasRight" 
//           aria-controls="offcanvasRight" 
//           onClick={toggleMenu}>MENU</button>

//         <div className={`offcanvas offcanvas-end ${style.containerMenu}`}  
//           tabIndex="-1" 
//           id="offcanvasRight" 
//           aria-labelledby="offcanvasRightLabel">
          
//           <div className={`offcanvas-body  ${style.menu}`}>

            
//               <ul className={`navbar-nav  ${style.navBarMenu}`}>
//                 <li className={`nav-item ${style.item}`}>
//                   <NavLink 
//                     className={`nav-link active ${style.link}`} 
//                     aria-current="page" 
//                     to='/'
//                     onClick={closeMenu}
//                     >Inicio </NavLink>
//                 </li>
//                 <li className={`nav-item ${style.item}`}>                 
//                   <NavLink 
//                     className={`nav-link active ${style.link}`}
//                     aria-current="page" 
//                     to='/contacto'
//                     onClick={closeMenu}
//                     >Contacto</NavLink>
//                 </li>
//                 <li className={`nav-item ${style.item}`}>
//                   <NavLink
//                     className={`nav-link active ${style.link}`}
//                     aria-current="page" 
//                     to='/trabajos'
//                     onClick={closeMenu}
//                     >Trabajos</NavLink>
//                 </li>
//                 <li className={`nav-item ${style.item}`}>
//                   <NavLink 
//                     className={`nav-link active ${style.link}`} 
//                     to='/about' 
//                     aria-disabled="true"
//                     onClick={closeMenu}
//                     >Nosotros</NavLink>
//                   </li>
//               </ul>
//           </div>
//         </div>
      
//   </div>
// </nav>

//   )
// }
// export default NavBar;











    

    
        



            
            