import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./../Loader/Loader";
import {database} from "../../Firebase/Firebase";

const ItemListContainer = () => {   
    const [displayItems, setDisplayItems] = useState([]);
    
    const {catId} = useParams();

    useEffect(() => {
        setDisplayItems([]);        
        
        const getItems = () => {
            if( catId ) { 
                    const categoria = database.collection("articulos").where("categoria", "==", catId)
                    categoria.get().then((query) => setDisplayItems(query.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                 })
                 ))           
                 
                } else {   
                    const articulo = database.collection("articulos")
                    articulo.get().then((result) => setDisplayItems(result.docs.map((docu) => {
                    return { ...docu.data(), id: docu.id};
                    })  
                    ));         
                }
            };
            
        getItems(catId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [catId]);

    return (
        <>
        {
        displayItems.length ? (
        <div className="contenedor">
            <ItemList displayItems={displayItems}/>
        </div>
            ) : (
                <Loader/> 
            )
        }
        </>
    );
     
};

export default ItemListContainer;
