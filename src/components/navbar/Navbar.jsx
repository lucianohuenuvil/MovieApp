import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/navbar/navbar.css"


export const Navbar = () => {
  return (

    
    <div className='navbar'>

        <header className="header">
          <nav  className="navbar container">
              <Link className='link'  to="/">MENU</Link>
              <Link className='link link-nav' to="/categories">Categorías</Link>
              <Link className='link link-nav' to="/addCategory">Agregar Categoría</Link>
              <Link className='link link-nav' to="/changeCategory">Modificar Categoría</Link>
              <Link className='link link-nav' to="/addMovie">Agregar Película</Link>
              <Link className='link link-nav' to="/changeMovie">Modificar Película</Link>

              <div className="icon-responsive">
                <i  className="fas fa-bars"></i>
              </div>
                      
              <div className="navbar-responsive showmenu">
                <Link className='link responsive-link' to="/categories">Categorías</Link>
                <Link className='link responsive-link' to="/addCategory">Agregar Categoría</Link>
                <Link className='link responsive-link' to="/changeCategory">Modificar Categoría</Link>
                <Link className='link responsive-link' to="/addMovie">Agregar Película</Link>
                <Link className='link responsive-link' to="/changeMovie">Modificar Película</Link>
              </div>
          </nav>
    
    </header>
    </div>
  )
}
