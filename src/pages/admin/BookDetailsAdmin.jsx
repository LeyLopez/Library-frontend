import React, { useContext } from 'react'
import { OptionsButton } from '../../components/OptionsButton'
import { BookContext } from '../../contexts/BookProvider';

export const BookDetailsAdmin = () => {
    const {book, author, genre} = useContext(BookContext);
    
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
                    <img src={book.coverPage} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">Título:{book.title}</h5>
                      <p className="card-text">
                        Resumen  {book.description}
                      </p>
                      <p>Autor: {author.name}</p>
                      <p>Año de publicación: {book.dateOfPublication}</p>
                      <p>Género: {genre.name}</p>
                      <p>Disponibilidad: {book.quantity}</p>
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
