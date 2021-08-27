import React,  { useContext } from "react";
import { CartContext } from '../Context/CartContext';
import { NavLink } from "react-router-dom";

const CartItem = ({item}) => {

    const {removeToCart, modifyArticle} = useContext(CartContext);     
       
    return (
        <div className="cart-items">          
            <img src={item.img} alt={item.titulo} className="img-item"/>
            <div className="detalle-items">
                <NavLink to={`/articulo/${item.id}`} onClick={() => {modifyArticle(item.id)}} className="titulo-item">
                    <h3 >{item.titulo}</h3>
                </NavLink>
                <div className="cant-pre">
                    <h3 className="cant-item"> Cantidad: {item.count}</h3>
                    <h3 className="precio-item">Precio C/U ${item.precio}</h3>
                </div>
                <div className="div-item-elim">
                    <h3 className="total-item"> Total: ${item.precio * item.count}</h3>
                    <button className="btn-item" onClick={() => {removeToCart(item.id)}}><i className="fas fa-trash "  ></i>
                    </button> 
                </div> 
            </div>
        </div>
        );
};      
export default CartItem;
  