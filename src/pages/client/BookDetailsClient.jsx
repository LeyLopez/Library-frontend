import React, { useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";

export const BookDetails = () => {

  const [alertMessage, setalertMessage] = useState("");

  const book = {
    title: "Cien años de soledad",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    fechaPublicacion: 1967,
    author: "Gabriel García Márquez",
    genre: "Novela",
    image: "cienaniossoledad.jpg",
    
  }


  const handleClick = ({btn}) => {
    setalertMessage(`El libro "${book.title}" ha sido ${btn} exitosamente.`);
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
                </div>
              </div>
            </div>
          </div>

          <div style={{marginLeft: "30%"}}>
        <button
          type="submit"
          className="btn mt-3 justify-content-center"
          style={{
            position: "relative",
            borderColor:"black",
            backgroundColor: "#fff",
            color: "black",
            width: "30%",
            right:"5px"
          }}
          onClick={() => handleClick({btn: "reservado"})}
        >
          Reservar
        </button>
        <button
          type="submit"
          className="btn mt-3"
          style={{
            position: "relative",
            borderColor:"black",
            backgroundColor: "#35C529",
            color: "white",
            width: "30%",
          }}
          onClick={() => handleClick({btn: "prestado"})}
        >
          Prestar
        </button>
        </div>
        {alertMessage && <div className="alert alert-warning" style={{marginTop:"10px"}}>{alertMessage}</div>}
        </div>
      </div>
    </div>
    </div>
  );
};
