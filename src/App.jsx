import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";




function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='' element={<ItemListContainer/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
