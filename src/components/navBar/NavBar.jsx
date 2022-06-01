import React from 'react'
import CartWidget from '../cartWidget/cartWidget'

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                </ul>
            </div>
        </div>
        <CartWidget/>
    </nav>
  )
}

export default NavBar