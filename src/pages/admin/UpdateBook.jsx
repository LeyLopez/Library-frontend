import React from 'react'

export const UpdateBook = () => {
  return (
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
        <h2 className="h3 mb-3">Actualizar libro de la biblioteca</h2>
        <form className="row g-3" style={{ position: "relative" }}>
          <input
            type="search"
            className="form-control"
            placeholder="Ingresa aquí el nombre del libro que deseas buscar para actualizar..."
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  )
}
