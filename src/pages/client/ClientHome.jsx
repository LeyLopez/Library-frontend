import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SortBookBy } from "../../components/SortBookBy";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../contexts/BookProvider";
import axios from "axios";

export const ClientHome = () => {
  const navigate = useNavigate();

  const { setBook } = useContext(BookContext);

  // Lista de libros
  const [books, setBooks] = useState([]);

  // Obtener libros
  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/libro");
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Navbar />

      <div>
        <SortBookBy />
        <div
          className="container"
          style={{
            position: "relative",
            maxWidth: "70%",
            marginTop: "2%",
            display: "block",
            top: "150px",
          }}
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
                    src={book.coverPage}
                    alt={book.title}
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <p>Autor: {book.author}</p>
                    <p>Año de publicación: {book.dateOfPublication}</p>
                  </div>
                </div>
                <div className="col-md-2 d-flex align-items-center">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      position: "relative",
                      marginLeft: "10%",
                      backgroundColor: "#14AE5C",
                      color: "white",
                    }}
                    onClick={() => {
                      setBook(book);
                      navigate("/clientbookdetails");
                    }}
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
    </>
  );
};
