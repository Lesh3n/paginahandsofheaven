import React from 'react'
import { useState } from 'react'

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [razon, setRazon] = useState("");
  const [correo, setCorreo] = useState("");
  const [detalle, setDetalle] = useState("");

  const enviarDatos = () => {
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido: ${apellido}`);
    console.log(`Razon: ${razon}`);
    console.log(`Correo: ${correo}`);
    console.log(`Detalle: ${detalle}`);
    alert("Mensaje enviado")
    setNombre("");
    setApellido("");
    setRazon("");
    setCorreo("");
    setDetalle("");
  };






  return (
    <>
      <div id='tituloContacto' className='text-center border-bottom border-dark'>
        <br />
        <h1>Contáctanos</h1>
      </div>
      <div id='container' className='container' style={{ width: "60%" }}>
        <br />
        <form id='formulario'>
          <div className="row">
            <div className="col-md-4 offset-md-2">
              <input type="text" className="form-control" placeholder="Nombre" aria-label="First name" value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
              <br />
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="Apellido" aria-label="Last name" value={apellido} onChange={(e) => { setApellido(e.target.value) }} />
            </div>
            <div className='row'>
              <div className="col-md-4 offset-md-2">
                <input type="text" className="form-control" placeholder="Razón de comunicación" aria-label="text" value={razon} onChange={(e) => { setRazon(e.target.value) }} />
              </div>
              <div className="col-4">
                <input type="email" className="form-control" placeholder="Correo" aria-label="Email" value={correo} onChange={(e) => { setCorreo(e.target.value) }} />
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              <br />
              <label for="exampleFormControlTextarea1" className="form-label">Detalle</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={detalle} onChange={(e) => { setDetalle(e.target.value) }}></textarea>
            </div>
            <div id='botonEnviar' className='text-center'>
              <br />
              <button type="button" className="btn btn-dark btn-lg" onClick={enviarDatos}>Enviar mensaje</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
