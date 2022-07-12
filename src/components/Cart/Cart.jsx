import React, {useState} from 'react'
import {useCartContext} from "../../context/CartContext"
import {Link} from "react-router-dom"
import ItemCart from '../CartItem/ItemCart';
import {addDoc, collection, getFirestore} from "firebase/firestore"
import "./cart.css"


const Cart = () =>{
  const {cart, totalPrice} = useCartContext();

setTimeout (()=> {
  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input');

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "usuario":
        validarCampo(expresiones.usuario, e.target, 'usuario');
      break;
      case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
      case "password":
        validarCampo(expresiones.password, e.target, 'password');
        validarPassword2();
      break;
      case "password2":
        validarPassword2();
      break;
      case "correo":
        validarCampo(expresiones.correo, e.target, 'correo');
      break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
    }
  }

  const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos[campo] = true;
    } else {
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos[campo] = false;
    }
  }

  const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value !== inputPassword2.value){
      document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos['password'] = false;
    } else {
      document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos['password'] = true;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
      formulario.reset();

      document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
      setTimeout(() => {
        document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
      }, 5000);

      document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
      });
    } else {
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
  });
  }, 3000)
  const order = {
    buyer: {
      name: "Lucas",
      apellido: "Britos",
      email: "lucasbritosboccazzi@outlook.com",
      phone: "448144",
      addres: "assss",
      cuit: "122112"
    },
    items: cart.map(product => ({id: product.id, nombre: product.name, precio: product.price, cantidad: product.cantidad})),
    total: totalPrice(),
  }



  if (cart.length === 0) {
    return (
      <>
          <div className='container contCartVacio card'>
            <p>No hay elementos en el carrito</p>
            <Link to= "/"><button className='formulario__btn btnC'>Hacer compras</button></Link>
          </div>
      </>
    );
  }
  
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <div className='container'>
        <p className='tot'>
          Total: $ {totalPrice()}
        </p>

        <h4>Confirma tu compra</h4>
        <div className="containerForm card">
        <div id='containerId'></div>
        <form action="" className="formulario" id="formulario">
			
			<div className="formulario__grupo" id="grupo__usuario">
				<label for="usuario" className="formulario__label">Usuario</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="usuario" id="usuario" placeholder="lucas123"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__nombre">
				<label for="nombre" className="formulario__label">Nombre</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="nombre" id="nombre" placeholder="Lucas Britos"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
			</div>

			
			<div class="formulario__grupo" id="grupo__password">
				<label for="password" className="formulario__label">Contraseña</label>
				<div className="formulario__grupo-input">
					<input type="password" className="formulario__input" name="password" id="password"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
			</div>

			
			<div class="formulario__grupo" id="grupo__password2">
				<label for="password2" className="formulario__label">Repetir Contraseña</label>
				<div className="formulario__grupo-input">
					<input type="password" className="formulario__input" name="password2" id="password2"/>
					<i class="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
			</div>

	
			<div className="formulario__grupo" id="grupo__correo">
				<label for="correo" className="formulario__label">Correo Electrónico</label>
				<div class="formulario__grupo-input">
					<input type="email" className="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__telefono">
				<label for="telefono" className="formulario__label">Teléfono</label>
				<div className="formulario__grupo-input">
					<input type="text" className="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
					<i className="formulario__validacion-estado fas fa-times-circle"></i>
				</div>
				<p className="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
			</div>

			
			<div className="formulario__grupo" id="grupo__terminos">
				<label className="formulario__label">
					<input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos"/>
					Acepto los Terminos y Condiciones
				</label>
			</div>
      <div class="formulario__mensaje" id="formulario__mensaje">
				<p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
			</div>

			<div class="formulario__grupo formulario__grupo-btn-enviar">
				<button type="submit" className="formulario__btn" >Enviar</button>
				<p className="formulario__mensaje-exito" id="formulario__mensaje-exito">Compra realizada exitosamente!</p>
			</div>
		</form>
  </div>
</div>

    </>
  )
}

const btn = document.getElementById('submitButton')


export default Cart