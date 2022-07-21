import React from 'react'
import fotoEquipo from '../assets/img/foto equipo.jpg'

export const QuienesSomos = () => {
  return (
    <>
    <div className='container'>
        <div id='tituloQuienesSomos' className='text-center border-bottom border-dark'>
          <br />
          <br />
          <br />
            <h1>¿Quiénes somos?</h1>
        </div>
        <br />
        <div id='cuerpoQuienesSomos' className='text-center'>
            <p>
                Somos una tienda chilena que vende mangas importados desde Argentina, Mexico y España
                <br />
                traemos las últimas novedades en cuánto a mangas se refiere y traducidos por diversas
                <br />
                editoriales de confianza de las que disfrutan mucho los fanáticos del animanga.
            </p>
            <br />
            <img src={fotoEquipo} alt="Fotografía del equipo de Hands Of Heaven" width={600} height={340} />
        </div>
    </div>
    </>
  )
}
