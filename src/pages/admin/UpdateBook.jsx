import React, { useContext, useEffect, useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../contexts/BookProvider";

export const UpdateBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const {setBook} = useContext(BookContext);


  const getBooks = async () => {
    try{
      const response = await axios.get("https://charming-happiness-production.up.railway.app/api/libro");
      setBooks(response.data);
    }
    catch(error){
      console.error("Error al obtener los libros", error);
    }
  }


  useEffect(()=>{
    getBooks();
  }, []);
  


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
        <OptionsButton title={"Actualizar libro de la biblioteca"} />
        <form className="row g-3 mb-4" style={{ position: "relative" }}>
          <input
            type="search"
            className="form-control"
            placeholder="Ingresa aquí el nombre del libro que deseas buscar para actualizar..."
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
                      src={book.coverPage}
                      alt={book.title}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p>Autor: {book.author}</p>
                      <p>Año de publicación: {book.dateOfPublication}</p>
                      <p>Disponibilidad: {book.quantity}</p>
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
                      onClick={()=> {
                        setBook(book);
                        navigate("/updatebooksecondview")}}
                    >
                      Actualizar
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
  );
};
