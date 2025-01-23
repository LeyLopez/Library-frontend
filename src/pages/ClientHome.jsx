import React from "react";
import { Navbar } from "../components/Navbar";
import { SortBookBy } from "../components/SortBookBy";
import { ClientSidebar } from "./client/ClientSidebar";
import { useNavigate } from "react-router-dom";

export const ClientHome = () => {

  const navigate = useNavigate();

  // Lista de libros
  const books = [
    {
      id: 1,
      title: "Cien años de soledad",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      author: "Gabriel García Márquez",
      year: 1967,
      image: "cienaniossoledad.jpg",
    },
    {
      id: 2,
      title: "Don Quijote de la Mancha",
      description: "A tale of chivalry and adventure in Spain during the early 17th century.",
      author: "Miguel de Cervantes",
      year: 1605,
      image: "donquijote.jpg",
    },
    {
      id: 3,
      title: "1984",
      description: "A dystopian novel set in a totalitarian society under constant surveillance.",
      author: "George Orwell",
      year: 1949,
      image: "1984.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      
      <div>
        <SortBookBy />
        <ClientSidebar ></ClientSidebar>
        <div
          className="container"
          style={{ position: "relative", maxWidth: "70%", marginTop: "2%", display: "block" }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              className="card mb-3"
              style={{ border: "none", marginLeft: "10%", width: "90%", height: "20%" }}
            >
              <div className="row g-0">
                <div className="col-md-2">
                  <img src={book.image} alt={book.title} style={{ width: "50%" }} />
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
                      marginLeft: "10%",
                      backgroundColor: "#14AE5C",
                      color: "white",
                    }}
                    onClick={()=>navigate("/clientbookdetails")}
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
