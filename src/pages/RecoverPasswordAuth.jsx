import React from "react";

export const RecoverPasswordAuth = () => {
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
        <h2 className="h3 mb-3">Cambiar contraseña</h2>
        <form className="row g-3" style={{ position: "relative"}}>
          <div className="col-md-5">
            <label className="form-label" style={{width:"100%"}}>Contraseña actual</label>
            <input type="password" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Nueva contraseña</label>
            <input type="password" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" name="lastname" />
          </div>
        </form>
        <div style={{marginLeft: "30%"}}>
        <button
          type="submit"
          className="btn mt-3"
          style={{
            position: "relative",
            borderColor:"black",
            backgroundColor: "#fff",
            color: "black",
            width: "20%",
            marginRight: "1%"
          }}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="btn mt-3"
          style={{
            position: "relative",
            borderColor:"black",
            backgroundColor: "#35C529",
            color: "white",
            width: "20%",
          }}
        >
          Actualizar
        </button>
        </div>
      </div>
    </div>
  );
};
