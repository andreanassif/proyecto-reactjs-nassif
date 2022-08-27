import React, {Fragment } from "react";

const Form =() =>{

    const handleInputChange =(eventForm)=> {
        console.log(eventForm)
    }


       return (
        <Fragment>
            <h1>Formulario</h1>
            <form>
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

            </form>
        </Fragment>
       )
}

export default Form