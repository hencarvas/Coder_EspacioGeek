import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { NavLink } from "react-router-dom";
import Form from './../Form/Form';
import CartItem from "./ItemCart";
 
const CartWidget = () => {

    const {cart, deleteCart, totalCart} = useContext(CartContext);
    return (
    <div  className="div-content"> 
        <div className="cart-top">
            <h2 className="tit-carrito" > Carrito</h2>
        </div>
    
    <div className="div-content-cart">
        <div className="div-carrito">
            {cart.length <= 0 ? (
                <div className="volver-ini">
                <h3>Carrito Vacio</h3>
                <NavLink to="/" className="" >
                    <button className="boton-volver">

                    Vuelve para hacer tus compras
                    </button>
                    </NavLink>
                </div>
            ) : (
                <div className="contenedor-cart">
                    <div className="div-cart-items">
                    <h2>Lista de Tus Artículos</h2>
                    {cart.map((item) => (
                        <CartItem item={item} key={item.id}/>
                        ))
                    }   
                    <div className="div-total">
                        <button className="btn-vaciar" onClick={() => {deleteCart()}}>Vaciar Carrito </button>
                        <h3 className="total-cart">Total: ${totalCart()}</h3>
                    </div>
                    </div>
                    <div className="div-cliente">
                        <h2>Datos del cliente para la compra</h2>
                        <Form cart={cart} />           
                    </div>
                </div>
                )
            }       
        </div>
    </div>
    </div>
    )

    };  

export default CartWidget;