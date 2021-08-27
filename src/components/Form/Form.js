import React, {useContext} from 'react';
import DetailForm from './DetailForm';
import {database} from './../../Firebase/Firebase';
import { CartContext } from '../Context/CartContext';
import firebase from "firebase/app";

const Form = ({cart}) => {

    const { totalCart, deleteCart} = useContext(CartContext);     

    const addCart =  (inputs) => {

            const handleOrder = {
                buyer: inputs,
                items: cart,
                fecha: new Date().toString(),
                total: totalCart(),
            }
            
            const orders = database.collection('ordenes');
            
            let orderId;
            
            orders.add(handleOrder).then((resp) => {orderId = resp.id}).catch((error) => {alert('error'+ error)});
            
            const itemsToCheck = database.collection("articulos").where(firebase.firestore.FieldPath.documentId(), "in", cart.map((item) => item.id));

            itemsToCheck.get().then((query) => {
                
              const batch = database.batch();

              const outOfStockItems = [];

                query.docs.forEach((doc, index) => {
                  if (doc.data().stock >= handleOrder.items[index].count) {
                    batch.update(doc.ref, {
                      stock: doc.data().stock - handleOrder.items[index].count,
                    });
                  } else {
                    outOfStockItems.push({ ...doc.data(), id: doc.id });
                  }
                });

                if (outOfStockItems.length === 0) {
                  batch.commit().then(() => {
                    alert("Compra Realizada cone exito! \n N. Orden: " + orderId);
                    deleteCart();
                  });
                } else {
                  alert("ERROR: Articulos sin stock suficiente.");
                }
              });
            };

 



    return(
        <>
        <DetailForm  addCart={addCart} cart={cart}/>

        </>
    )
}

export default Form;

// orders.add(handleOrder).then((resp) => {alert('Agregado correctamente. N. Orden: ' + resp.id)}).catch((error) => {alert('error', error)});

//                 deleteCart()