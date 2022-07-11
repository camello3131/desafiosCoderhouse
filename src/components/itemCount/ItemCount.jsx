import React, {useState} from "react";
import "../itemCount/itemCount.css"

export const ItemCount = ({initial, stock, onAdd})=> {
    const [count, setCount] = useState (initial)

    const decrease = () => {
        setCount(count -1)
    }

    const increase = () => {
        setCount(count +1)
    }

    return (
        <div className="contenedorCount">
            <button className="count" disabled={count <= 1} onClick={decrease}>-</button>
            <span>  {count}  </span>
            <button className="count" disabled={count >= stock} onClick={increase}>+</button>
            <div className="boton">
                <button className="count countAdd" disabled={stock <= 0} onClick={()=> onAdd(count)} >Agregar a Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;