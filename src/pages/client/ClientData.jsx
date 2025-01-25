import React from "react";
import { OptionsButton } from "../../components/OptionsButton";

export const ClientData = () => {
  return (
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
        <OptionsButton title={"Mis datos"}></OptionsButton>
        <form className="row g-3">
          <div className="col-md-5">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" name="lastname" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="col-md-5">
            <label className="form-label col-md-3">Dirección</label>
            <input type="text" className="form-control" name="address" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Fecha de nacimiento</label>
            <input type="date" className="form-control" name="birdthday" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Teléfono</label>
            <input type="tel" className="form-control" name="phone" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Tipo de documento</label>
            <select className="form-select" name="rol">
              <option value="">Seleccione un tipo de documento...</option>
              <option value="CEDULA">Cédula de ciudadanía</option>
              <option value="TARJETA DE IDENTIDAD">Tarjeta de identidad</option>
              <option value="CEDULA EXTRANGERIA">Cédula de extrangería</option>
            </select>
          </div>
          <div className="col-md-5">
            <label className="form-label">Número de documento</label>
            <input type="phone" className="form-control" name="idnumber" />
          </div>
        </form>
          <button
            type="submit"
            className="btn mt-3"
            style={{
              position: "relative",
              margin: "30%",
              backgroundColor: "#14AE5C",
              color: "white",
              width: "20%",
            }}
          >
            Actualizar
          </button>
      </div>
    </div>

  );
};
