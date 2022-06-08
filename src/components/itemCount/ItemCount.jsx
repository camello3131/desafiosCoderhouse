import React, {useState} from "react";

export const ItemCount = ({initial, stock, onAdd})=> {
    const [count, setCount] = useState (initial)

    const restar = () => {
        setCount(count -1)
    }

    const sumar = () => {
        setCount(count +1)
    }

    return (
        <div className="container contenedorCount">
            <button className="btn btn-primary" disabled={count <= 1} onClick={restar}>-</button>
            <span>  {count}  </span>
            <button className="btn btn-primary" disabled={count >= stock} onClick={sumar}>+</button>
            <div className="container boton">
                <button className="btn btn-primary agregar" disabled={stock <= 0} onClick={()=> onAdd(count)} >add</button>
            </div>
        </div>
    )
}

export default ItemCount;