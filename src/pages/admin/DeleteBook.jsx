import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { OptionsButton } from "../../components/OptionsButton";

export const DeleteBook = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const books = [
    {
      id: 1,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      year: 1967,
      image: "cienaniossoledad.jpg",
    },
    {
      id: 2,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      year: 1605,
      image: "donquijote.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      image: "1984.jpg",
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className="d-flex justify-content-center py-5"
        style={{
          position: "relative",
          width: "90%",
          marginBottom: "20%",
          marginLeft: "10%",
        }}
      >
        <div className="col-md-9">
          <OptionsButton title={"Eliminar libro de la Biblioteca"} />
          <form
            className="row g-3 mb-4"
            style={{ position: "relative", width: "90%" }}
          >
            <input
              type="search"
              className="form-control"
              placeholder="Ingresa aquí el nombre del libro que deseas buscar para eliminar..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
          <div className="container" style={{ position: "relative", maxWidth: "90%" }}>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
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
                          backgroundColor: "#FF4C4C",
                          color: "white",
                          width: "100%",
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p>No se encontraron libros que coincidan con la búsqueda.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
