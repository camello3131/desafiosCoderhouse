import React, {useState} from "react";

export const ItemCount = ({initial, stock, onAdd})=> {
    const [count, setCount] = useState (initial)

    const decrease = () => {
        setCount(count -1)
    }

    const increase = () => {
        setCount(count +1)
    }

    return (
        <div className="container contenedorCount">
            <button className="btn btn-primary" disabled={count <= 1} onClick={decrease}>-</button>
            <span>  {count}  </span>
            <button className="btn btn-primary" disabled={count >= stock} onClick={increase}>+</button>
            <div className="container boton">
                <button className="btn btn-primary agregar" disabled={stock <= 0} onClick={()=> onAdd(count)} >add</button>
            </div>
        </div>
    )
}

export default ItemCount;