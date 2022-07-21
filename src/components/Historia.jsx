import React from 'react'
import sailor from '../assets/img/sailor estrellas.gif'

export const Historia = () => {
  return (
    <>
    <div className='container'>
      <div id='tituloHistoria' className='text-center'>
        <br />
        <h1 className='border-bottom border-dark'>Nuestra Historia</h1>
        <br />
          <div id='cuerpoHistoria'>
            <p>
              Nuestro pequeño negocio comenzó de manera hogareña, desde una cuenta de Instagram solíamos vender nuestros productos
              <br />
              que, previamente, se importaban desde Argentina. Esto debido a que queda cerca de nuestro país, disponer la ventaja de que se pacta directamente con las editoriales y menores costos de importación. 
              Haciendo que esto le saliera más a cuenta tanto como a nosotros como a nuestros clientes.
              <br />
              Cuando recién comenzamos, apenas teníamos <i>aproximadamente</i> unos <i>50</i> seguidores. Las constantes recomendaciones de nuestros clientes a sus amigos y seres queridos,
              fue logrando que muchas más personas comprasen nuestros productos. Quedamos tan emocionados que fuimos haciendo sorteos a medida que iban subiendo los números.
              Esto con el fin de hacer crecer nuestro negocio y regalar algunas cosas a nuestros seguidores más fieles.
              <br />
              Somos reconocidos desde la región de Tarapacá hasta Tierra del Fuego.
              <br />
              Gracias a todo el apoyo que ustedes nos han brindado, hemos podido costear el local que tenemos actualmente. No seríamos nada sin ustedes y por eso es que hacemos esto.
              Porque <i>según nosotros</i> les debemos MUCHÍSIMO a ustedes!!!!
              
            </p>
              <div id='gifSailor'>
                <br />
                <img src={sailor} alt="Fotografía animada de sailor moon con estrellas en sus ojos." />
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
