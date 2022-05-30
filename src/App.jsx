import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Cuerpo from './components/cuerpo'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar/NavBar'




function App() {
  return (
    <>
    <NavBar/>
    <Cuerpo/>
    </>
  )
}

export default App
