import React from 'react'
import CartWidget from '../cartWidget/cartWidget'
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to={"/"}>Logo</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/cart"}>Carrito</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
                </li>
                </ul>
            </div>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default NavBar