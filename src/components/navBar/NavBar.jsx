import React from 'react'
import CartWidget from '../cartWidget/cartWidget'
import {NavLink} from "react-router-dom"
import "../navBar/navbar.css"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm container-fluid">
        <div className="contNav">
            <NavLink className="navbar-brand" to={"/"}>
                    <h3>compuCoder</h3>
            </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav" id="collapsibleNavbar">
                <ul className="nav">
                    <li className="">
                        <NavLink className="nav-linkk ca" to={"/cart"}>Carrito</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="nav-linkk" to={"/productos/gaseosas"}>Gaseosas</NavLink>
                    </li>
                    <li className="">
                        <NavLink className="nav-linkk" to={"/productos/cervezas"}>Cervezas</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <CartWidget/>
    </nav>   
  )
}

export default NavBar