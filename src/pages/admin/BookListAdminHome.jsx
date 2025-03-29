import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SortBookBy } from "../../components/SortBookBy";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../../contexts/BookProvider";
import axios from "axios";
import { bookService } from "../../api/bookService";
import { authorService } from "../../api/authorService";
import genreService from "../../api/genreService";

export const BookList = () => {

  const navigate = useNavigate();

  const { setBook, setAuthor, setGenre } = useContext(BookContext);

  // Lista de libros
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState({});
  const [genres, setGenres] = useState({});

  // Obtener libros
  const getBooks = async () => {
    try {
      const response = await bookService.getAllBooks();
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  };


  const getAuthor = async (id) => {
    try {
      const response = await authorService.getAuthorById(id);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el autor", error);
      return null;
    }
  };

  const getGenre = async (id) => {
    try {
      const response = await genreService.getGenreById(id);
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
                      <p>Año de publicación: {book.dateOfPublication}</p>
                      <p>Género: {genres[book.genre]?.name || "Cargando..."}</p>
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
                      onClick={() => {
                        setBook(book);
                        setAuthor(authors[book.author]);
                        setGenre(genres[book.genre]);
                        navigate("/adminbookdetails")}}
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
