import { useState, useEffect, useContext, Fragment} from 'react'
import CartContextProvider from '../../context/CartContext'
import {dbase} from '../../services/firebase'
import { addDoc, collection, updateDoc, doc, getDocs, query, where, documentId, writebatch, writeBatch } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'
import React from "react";
import Form from '../../hooks/Form'


const Checkout = ()=> {
     const [isLoading, setIsLoading] =useState(false)
     const [orderCreated, setOrderCreated] = useState(false)
     const {cart, getQuantity, getTotal, clearCart} = useContext(CartContextProvider)

     const navigate =useNavigate()

     const totalQuantity = getQuantity()
     const total = getTotal()

     const createOrder = async ({firstName, lastName, address, phone})=> {
        setIsLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: `${firstName}`,
                    lastName: `${lastName}`,
                    phone: `${phone}`,
                    address: `${address}`,
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date()
            }

            const Form =() =>{

                const handleInputChange =(eventForm)=> {
                    console.log(eventForm.target.value)
                    setOrderCreated({
                        ...orderCreated,
                        [eventForm.taget.name] : eventForm.taget.value
                    })
                }
                
                
                   return (
                    <>
                        <h1>Formulario</h1>
                            <Form>
                                <input 
                                name="firstName"
                                placeholder="Ingresar Nombre"
                                onChange={handleInputChange}
                                ></input>
                                <input 
                                name="lastName"
                                placeholder="Ingresar Apellido"
                                onChange={handleInputChange}
                                ></input>
                                <input 
                                name="address"
                                placeholder="Ingresar domicilio"
                                onChange={handleInputChange}
                                ></input>
                                <input 
                                name="phone"
                                placeholder="Ingresar teléfono"
                                onChange={handleInputChange}
                                ></input>
                    
                            </Form>
                        </>
                    
                   )
                }
                

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(dbase, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const {docs} = productsAddedFromFirestore

            const outOfStock = []
            const batch = writeBatch(dbase)

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDbase = dataDoc.stockDbase

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.getQuantity
                if(stockDbase >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDbase - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(dbase, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                console.log(`El Nº de su Orden de Compra es: ${orderAdded.id}`)
                clearCart()
                setOrderCreated(true)
                setTimeout(()=> {
                    navigate('/')
                }, 3000)
            }else{
                console.log('Hay productos que no tienen stock')
            }
        } catch (error) {
            console.log(error)
        }finally{
            setIsLoading(false)
        }
     }
     if(isLoading){
        return <h1>Se está procesando tu orden...</h1>
     }

     if(orderCreated) {
        return <h1>La orden se proceso correctamente, en breve seras redirigido al listado de productos</h1>
     }

     return (
        <>
            <h1>Checkout</h1>
            <Form />
            
            <button className='Option' onClick={createOrder}>Generar Orden de Compra</button>
        </>
     )
}

export default Checkout
