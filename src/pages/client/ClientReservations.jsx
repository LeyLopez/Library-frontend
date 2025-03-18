import React, { useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import { ModalWarning } from "../../components/ModalWarning";
import { useAuth } from "../../contexts/AuthProvider";
import axios from "axios";

export const ClientReservations = () => {
  // Lista de reservas
  const [reservations, setReservations] = useState([]);

  const { user } = useAuth();

  // Obtener reservas
  const getReservations = async () => {
    try {
      // Petición GET al servidor
      const response = await axios.get(`http://localhost:8080/api/reserva/user/${user.id}`);
      setReservations(response.data);
    } catch (error) {
      console.error("Error al obtener las reservas", error);
    }
  };

  useEffect(() => {
    getReservations();
  }, []);

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const openCancelModal = () => setIsCancelModalOpen(true);
  const closeCancelModal = () => setIsCancelModalOpen(false);

  const handleCancelReservation = () => {
    closeCancelModal();
    setAlertMessage("Cancelando reserva");

    setTimeout(() => {
      setAlertMessage("Reservación cancelada con éxito.");
    }, 2000);
  };

  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        position: "relative",
        width: "90%",
        marginBottom: "10%",
        marginLeft: "10%",
        top: "150px",
      }}
    >
      <div className="col-md-9">
        <OptionsButton title={"Mis reservas"} />
        <br />
        {alertMessage && (
            <div className="alert alert-warning">{alertMessage}</div>
          )}
        <div
          className="container"
          style={{ position: "relative", maxWidth: "90%" }}
        >
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
              <ModalWarning
                title={"Cancelar reserva"}
                message={"¿Está seguro que desea cancelar la reserva?"}
                isOpen={isCancelModalOpen}
                onClose={closeCancelModal}
                onConfirm={handleCancelReservation}
              ></ModalWarning>
              
              <br />
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={reservation.image}
                    alt={reservation.title}
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{reservation.title}</h5>
                    <p>Autor: {reservation.author}</p>
                    <p>Fecha de reserva: {reservation.reservationDate}</p>
                    <p>
                      Fecha de vencimiento de reserva: {reservation.reservationEndDate}
                    </p>
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
                    onClick={openCancelModal}
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
