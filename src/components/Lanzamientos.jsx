import React from 'react'

export const Lanzamientos = () => {
  return (
    <>
      <div id='tituloLanzamientos' className='text-center border-bottom border-dark'>
          <br />
            <h1>Proximos Lanzamientos</h1>
          <br />
      </div>
      <div id='cuerpoLanzamientos' className='text-center'>
        <br />
            <h6>Los siguientes mangas estarán disponibles proximamente...</h6>
        <br />
        <div id='lista'>
            <ul>
              <li><b>Jujutsu Kaisen</b></li>
              <li><b>Kaguya Sama Love Is War</b></li>
              <li><b>Jojo's Bizarre Adventure - Parte 6 "Stone Ocean"</b></li>
            </ul>
        </div>
        <p>¡PARA MÁS INFORMACIÓN, AQUÍ ABAJO SE ENCUENTRA UNA PEQUEÑA SINOPSIS DE LOS MANGAS, SUS PRECIOS Y LAS EDITORIALES QUE SE ENCARGARON DE TRADUCIR LA OBRA!</p>
      </div>
      <div id='video' className='text-center'>
          <iframe src="https://drive.google.com/file/d/1UpD01wJxJCSvUvgFRJifnB3pLWRYMk9B/preview" width="600"
          height="350" allow="autoplay"></iframe>
      </div>
    </>
  )
}
