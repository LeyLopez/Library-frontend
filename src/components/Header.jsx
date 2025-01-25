import React from "react";
import "/libros.png";

export const Header = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center  py-5"
      style={{
        position:"fixed",
        width: "100%",
        height: "150px",    
        backgroundColor: "#3DDC44",
        textAlign: "center",
        color: "#fff",
        display: "flex",
        zIndex: "1000",
      }}
    >
      <header className="">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            className="bi me-2"
            width="60"
            height="48"
            src="./libros.png"
          ></img>
          <h1 className="fs-2" style={{color : "#fff"}}>
            Sistemas de Reservas y Préstamos de Bibliotecas
          </h1>
        </a>
      </header>
    </div>
  );
};
