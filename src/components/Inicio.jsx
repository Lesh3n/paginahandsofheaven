import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import logo from '../assets/img/HANDS OF HEAVEN LOGO.png'
import escaparate from '../assets/img/vitrina tienda mangas.png'

export const Inicio = () => {

  return (
    <>
        <div className="container">
            <div id='logo' className="row">
                <div className="text-center">
                    <img src={logo} alt="Logo hands of heaven" width="300px" height="300px" />
                </div>
            </div>
            <div id='tituloPagina' className="text-center border-bottom border-dark">
                <h1>¡BIENVENIDO A HANDS OF HEAVEN!</h1>
            </div>
            <br />
            <div id='textoTituloInicio' className='text-center'>
                <p>
                    ¡Lugar donde los sueños se hacen realidad! 
                    <br/>
                    "¿De qué sirve tener sueños si uno no los hace realidad? Es por eso que trabajamos duro por ello." 
                    <br />
                    Por y para ustedes. <i class="bi bi-heart-fill" style={{color:"red"}}></i>
                </p>
                <div id='imagenEscaparate'>
                    <img src={escaparate} alt="Escaparate Tienda Hands Of Heaven" width={600} height={400} />
                </div>
            </div>
        </div>
    </>
  )
}
