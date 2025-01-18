import React from "react";
import { Navbar } from "../../components/Navbar";

export const DeleteBook = () => {
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
          <h2 className="h3 mb-3">Eliminar libro de la biblioteca</h2>
          <form className="row g-3" style={{ position: "relative", width: "90%" }}>
            <input
              type="search"
              className="form-control"
              placeholder="Ingresa aquí el nombre del libro que deseas buscar para eliminar..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </>
  );
};
