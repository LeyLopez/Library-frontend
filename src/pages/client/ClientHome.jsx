import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SortBookBy } from "../../components/SortBookBy";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../contexts/BookProvider";
import axios from "axios";

export const ClientHome = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { setBook, setAuthor, setGenre } = useContext(BookContext);

  // Lista de libros
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState({});
  const [genres, setGenres] = useState([]);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Obtener libros
  const getBooks = async () => {
    try {
      const response = await axios.get("https://charming-happiness-production.up.railway.app/api/libro");
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  };


  const getAuthor = async (id) => {
    try {
      const response = await axios.get(`https://charming-happiness-production.up.railway.app/api/autor/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el autor", error);
      return null;
    }
  };

  const getGenre = async (id) => {
    try {
      const response = await axios.get(`https://charming-happiness-production.up.railway.app/api/genero/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el género", error);
      return null;
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorsData = {};
      for (const book of books) {
        if(!authorsData[book.author]) {
          authorsData[book.author] = await getAuthor(book.author);
        }
      }
      setAuthors((prev)=>({...prev, ...authorsData}));  
    };
    if (books.length>0){
      fetchAuthors();
    }
  }, [books]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresData = {};
      for (const book of books) {
        if(!genresData[book.genre]) {
          genresData[book.genre] = await getGenre(book.genre);
        }
      }
      setGenres((prev)=>({...prev, ...genresData}));  
    };
    if (books.length>0){
      fetchGenres();
    }
  }, [books]);

  const formatDate = (isoDate) => {
    return isoDate ? isoDate.split('T')[0] : "";
  };

  return (
    <>
      <div style={{position:"relative", top:"150px"}}>
      <nav className="navbar navbar-expand" aria-label="Second navbar example">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-5">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Opciones
                </a>
              </li>
            </ul>
            <form
              role="search"
              style={{
                position: "relative",
                width: "90%",
              }}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Ingresa aquí el nombre del libro que deseas buscar..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>

          </div>
        </div>
      </nav>
    </div>

      <div>
        {/* <SortBookBy /> */}
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
          {filteredBooks.map((book) => (
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
                    <p>Autor: {authors[book.author]?.name || "Cargando..."}</p>
                    <p>Año de publicación: {formatDate(book.dateOfPublication)}</p>
                    <p>Género: {genres[book.genre]?.name || "Cargando..."}</p>
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
                      setAuthor(authors[book.author]);
                      setGenre(genres[book.genre]);
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
