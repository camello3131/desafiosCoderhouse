import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react';
import CartProvider from "./context/CartContext"
import {Spinner} from "react-bootstrap";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
        <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoriaId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
