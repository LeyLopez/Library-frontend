import React from "react";
import { Navbar } from "../../components/Navbar";
import { SortBookBy } from "../../components/SortBookBy";
import { AdminSidebar } from "./AdminSidebar";
import { useNavigate } from "react-router-dom";

export const BookList = () => {

  const navigate = useNavigate();

  const books = [
    {
      id: 1,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967,
      description:
        "Una novela mágica que cuenta la historia de la familia Buendía en el pueblo ficticio de Macondo.",
      image: "cienaniossoledad.jpg",
    },
    {
      id: 2,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      year: 1605,
      description:
        "Las aventuras de un caballero idealista y su fiel escudero en la España del Siglo de Oro.",
      image: "donquijote.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      description:
        "Una distopía que explora la vigilancia, el totalitarismo y el control del pensamiento.",
      image: "1984.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <SortBookBy />
      <div
        className="d-flex justify-content-center py-5"
        style={{
          position: "relative",
          width: "90%",
          marginLeft: "10%",

          top:"150px"
        }}
      >
          
        <div className="col-md-9">
          <h2 className="h3 mb-3">Lista de libros disponibles</h2>
          <div
            className="container"
            style={{ position: "relative", maxWidth: "90%" }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                className="card mb-3"
                style={{
                  border: "none",
                  marginLeft: "10%",
                  width: "90%",
                  height: "20%",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={book.image}
                      alt={book.title}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">{book.description}</p>
                      <p>Autor: {book.author}</p>
                      <p>Año de publicación: {book.year}</p>
                    </div>
                  </div>
                  <div className="col-md-2 d-flex align-items-center">
                    <button
                      type="button"
                      className="btn"
                      style={{
                        position: "relative",
                        backgroundColor: "#14AE5C",
                        color: "white",
                        width: "100%",
                        
                      }}
                      onClick={() => navigate("/adminbookdetails")}
                    >
                      Detalles 
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
