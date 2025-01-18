import React from 'react'
import { OptionsButton } from '../../components/OptionsButton'

export const ClientReservations = () => {
  return (
    <div className="d-flex justify-content-center py-5"
    style={{
      position: "relative",
      width: "90%",
      marginBottom: "10%",
      marginLeft: "10%"
    }}>
      <div className="col-md-9">
        <OptionsButton title={"Mis reservas"}></OptionsButton>
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
            <br />
        
          <div className="row g-0">
            <div className="col-md-2">
              <img src="cienaniossoledad.jpg" alt="..." style={{width:"50%"}}/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cien años de soledad</h5>
                <p>Autor: </p>
                <p>Fecha de reserva:</p>
                <p>Fecha de vencimiento de reserva:</p>
              </div>
            </div>
            <div className="col-md-2 d-flex align-items-center">
              <button
                type="button"
                className="btn"
                style={{position: "relative", marginLeft: "10%", backgroundColor:"#14AE5C", color:"white"}}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
        <hr />
        </div>
      </div>
    </div>
  )
}
