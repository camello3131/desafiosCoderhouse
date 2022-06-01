import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './components/itemListContainer/ItemListContainer'




function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer param1="Hola" param2="Este texto sera reemplazado por nuestro catalogo"/>
    </>
  )
}

export default App
