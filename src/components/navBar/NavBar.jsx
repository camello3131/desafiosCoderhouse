import React from 'react'
import CartWidget from '../cartWidget/cartWidget'
import {NavLink} from "react-router-dom"
import "../navBar/navbar.css"
import "./nav.js"

function NavBar() {
  return (
    <nav>
        <div className="containerNav">
            <NavLink className="is-active" to={"/"}>
                <h3 className="is-active">compuCoder</h3>
            </NavLink>
            <div className="menu">
                <a href="">
                    <NavLink className="nav-linkk" to={"/productos/pc"}>Computadoras</NavLink>
                </a>
                <a href="">
                    <NavLink className="nav-linkk" to={"/productos/accesorio"}>Accesorios</NavLink> 
                </a>   
                <a href="">
                    <NavLink className="nav-linkk is-active" to={"/cart"}>Tu Compra</NavLink>
                </a>         
            </div>
            <button className='hamburger'>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar