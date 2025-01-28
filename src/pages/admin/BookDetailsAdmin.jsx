import React from 'react'
import { OptionsButton } from '../../components/OptionsButton'

export const BookDetailsAdmin = () => {
    const book = {
        title: "Cien años de soledad",
        description:
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaPublicacion: 1967,
        author: "Gabriel García Márquez",
        genre: "Novela",
        image: "cienaniossoledad.jpg",
        disponibility:10
        
      }
    
      return (
        <div className="container">
          <div
          className="d-flex justify-content-center py-5"
          style={{
            position: "relative",
            width: "90%",
            marginBottom: "20%",
            marginLeft: "10%",
            top:"150px"
          }}
        >
          <div className="col-md-9">
            <OptionsButton title={"Detalles del libro"}></OptionsButton>
    
            <div
              className="container"
              style={{
                position: "relative",
                maxWidth: "70%",
                marginTop: "2%",
                
              }}
            >
              <div className="card mb-3" style={{maxWidth: "100%"}}>
                <div className="row">
                  <div className="col-md-4">
                    <img src={book.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Título:{book.title}</h5>
                      <p className="card-text">
                        Resumen  {book.description}
                      </p>
                      <p>Autor: {book.author}</p>
                      <p>Año de publicación: {book.fechaPublicacion}</p>
                      <p>Género: {book.genre}</p>
                      <p>Disponibilidad: {book.disponibility}</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
  )
}
