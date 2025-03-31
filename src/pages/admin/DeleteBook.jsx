import React, { useEffect, useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import { ModalWarning } from "../../components/ModalWarning";
import axios from "axios";

export const DeleteBook = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");

  const [books, setBooks] = useState([]);

 

  const handleDeleteClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };


  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/libro");
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  }

  useEffect(()=>{
    getBooks();
  }, []);


  const confirmDelete = async() => {
    setShowModal(false);

    setAlertMessage("Eliminando libro...");
    try {
      await axios.delete(`http://localhost:8080/api/libro/${selectedBook.id}`);
      setAlertMessage(`El libro "${selectedBook.title}" ha sido eliminado exitosamente.`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== selectedBook.id));
    } catch (error) {
      console.error("Error al eliminar el libro", error);
      setAlertMessage("Error al eliminar el libro.");
    }
  };


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
          top: "150px",
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
          {alertMessage && (
            <div className="alert alert-warning">{alertMessage}</div>
          )}
          <div
            className="container"
            style={{ position: "relative", maxWidth: "90%" }}
          >
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
                          backgroundColor: "#FF4C4C",
                          color: "white",
                          width: "100%",
                        }}
                        onClick={() => handleDeleteClick(book)}
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

      <ModalWarning
          title={"Eliminar libro"}
          message={`¿Esta seguro que desea eliminar el libro "${selectedBook?.title}"?`}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onConfirm={confirmDelete}
        ></ModalWarning>
    </>
  );
};
