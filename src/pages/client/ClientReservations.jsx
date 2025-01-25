import React from 'react';
import { OptionsButton } from '../../components/OptionsButton';

export const ClientReservations = () => {
  // Lista de reservas
  const reservations = [
    {
      id: 1,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      reservationDate: "2025-01-10",
      dueDate: "2025-01-20",
      image: "cienaniossoledad.jpg",
    },
    {
      id: 2,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      reservationDate: "2025-01-11",
      dueDate: "2025-01-21",
      image: "donquijote.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      reservationDate: "2025-01-12",
      dueDate: "2025-01-22",
      image: "1984.jpg",
    },
  ];

  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        position: "relative",
        width: "90%",
        marginBottom: "10%",
        marginLeft: "10%",
        top:"150px"
      }}
    >
      <div className="col-md-9">
        <OptionsButton title={"Mis reservas"} />
        <br />
        <div className="container" style={{ position: "relative", maxWidth: "90%" }}>
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
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
                  <img src={reservation.image} alt={reservation.title} style={{ width: "50%" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{reservation.title}</h5>
                    <p>Autor: {reservation.author}</p>
                    <p>Fecha de reserva: {reservation.reservationDate}</p>
                    <p>Fecha de vencimiento de reserva: {reservation.dueDate}</p>
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
                  >
                    Cancelar
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
