import React from "react";
import { NavLink } from "react-router-dom";


const Item = ({articulo}) => {
    return (
        <article className="article">
            <NavLink to={`/articulo/${articulo.id}`} className="link-card">
                    <div className="section">
                        <img className="img" src={articulo.img} alt={articulo.img}></img>
                        <h3 className="nom-articulo">{articulo.titulo}</h3>
                        <p className="precio">Precio:  ${articulo.precio}</p>
                    </div>
            </NavLink>
        </article>
    );
};

export default Item;