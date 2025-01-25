import React from 'react'
import { OptionsButton } from '../../components/OptionsButton'

export const AddBook = () => {
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
      <OptionsButton title={"Agregar libro a la biblioteca"}></OptionsButton>
        <form className="row g-3" style={{ position: "relative" }}>
          <div className="col-md-5">
            <label className="form-label" style={{ width: "100%" }}>
              Título
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Autor</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Año de publicación</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Género</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Tipo de ejemplar</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Idioma</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Resumen</label>
            <input type="text" className="form-control" />
          </div>
        </form>
        <div style={{ marginLeft: "30%" }}>
          <button
            type="button"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#fff",
              color: "black",
              width: "20%",
              marginRight: "1%",
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#3DDC44",
              color: "white",
              width: "20%",
            }}
          >
            Agregar libro
          </button>
        </div>
      </div>
    </div>

  )
}
