import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Categorias} from "./../../datos/categorias.json";
import { CartContext } from '../Context/CartContext';

const NavBar = () => {
    
    const {quantityItmes} = useContext(CartContext);
    
    return (
        <nav className="navbar" title="Inicio">
            <NavLink to="/" className="titulo-prin" >EspacioGeek</NavLink>
            <div className="div-nav">
            <ul>
                {Categorias.map((cat) => (
                    <NavLink to={`/categoria/${cat.id}`}
                        key={cat.id}  className="nav-enlace">
                        {cat.nombre}
                    </NavLink>
                ))}
            </ul> 
            <NavLink to="/cart"> 
                <div className="div-cart" title="Carrito">    
                <i className="fas fa-shopping-cart item-cart"> 
                <div className="cant-items">{quantityItmes()}</div>
                </i>
                </div>
            </NavLink>
            </div>
        </nav>
    );
}; 

export default NavBar;

