import React from "react";
import { Navbar } from "../components/Navbar";

export const ClientHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="btn-group">
          <p
            style={{
              position: "relative",
              marginLeft: "50%",
              marginBottom: 0,
              paddingLeft: 12,
              paddingRight: 12,
              paddingBottom: 6,
              paddingTop: 6,
            }}
          >
            Ordenar por
          </p>
          <button
            type="button"
            className="btn dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              position: "relative",
              marginLeft: "20%",
              borderRadius: 10,
            }}
          >
            Género
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Comedia
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Romance
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Terror
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Ficción
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Fantasía
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn dropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              position: "relative",
              marginLeft: "20%",
              marginBottom: 0,
              borderRadius: 10,
            }}
          >
            Tipo de ejemplar
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Enciclopedia
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Diccionario
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Literatura
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Biografía
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Atlas
              </a>
            </li>
          </ul>
        </div>
            <br />
        <div className="container" style={{position:"relative", maxWidth: "90%", marginTop:"2%"}}>
        <div className="card mb-3" style={{border: "none", marginLeft:"10%", width:"90%", height:"20%"}}>
          <div className="row g-0">
            <div className="col-md-2">
              <img src="cienaniossoledad.jpg" alt="..." style={{width:"50%"}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cien años de soledad</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>Autor: </p>
                <p>Año de publicación:</p>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <button
                type="button"
                className="btn"
                style={{position: "relative", marginLeft: "10%", backgroundColor:"#14AE5C", color:"white"}}
              >
                Detalles
              </button>
            </div>
          </div>
        </div>
        <hr />
        </div>
      </div>
    </>
  );
};
