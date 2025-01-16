import React from "react";

export const ClientLoans = () => {
  return (
    <div className="d-flex justify-content-center py-5"
    style={{
      position: "relative",
      width: "90%",
      marginBottom: "10%",
      marginLeft: "10%"
    }}>
      <div className="col-md-9">
        <h2 className="h3 mb-3">Mis préstamos</h2>
        <br />
        <div
          className="container"
          style={{ position: "relative", maxWidth: "90%" }}
        >
          <div
            className="card mb-3"
            style={{
              border: "none",
              marginLeft: "10%",
              width: "80%",
              height: "10%",
            }}
          >
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src="cienaniossoledad.jpg"
                  alt="..."
                  style={{ width: "50%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Cien años de soledad</h5>
                  <p>Autor: </p>
                  <p>Fecha de préstamo:</p>
                  <p>Fecha de vencimiento de préstamo:</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};
