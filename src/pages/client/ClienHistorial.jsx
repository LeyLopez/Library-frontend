import React, { useEffect, useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import { ModalWarning } from "../../components/ModalWarning";
import { useAuth } from "../../contexts/AuthProvider";
import axios from "axios";

export const ClientHistorial = ({type}) => {
  // Lista de reservas
  const [historial, setHistorial] = useState([]);
  const [books, setBooks] = useState({});
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedReservation, setSelectedReservation] = useState(null);

  const { user } = useAuth();

  // Cancelar reserva
  const deleteReservation = async () => {
    if (!selectedReservation) return;
    const today = new Date();    
    try {
      if(selectedReservation.status !== "FINALIZADO" && selectedReservation.status !== "VENCIDO" && selectedReservation.status !== "CANCELADO") {
        const updatedReserva = {
          id: selectedReservation.id,
          reservationDate: selectedReservation.reservationDate,
          reservationEndDate: selectedReservation.reservationEndDate,
          statusChangeDate: today.toISOString().split("T")[0],
          user: selectedReservation.user,
          book: selectedReservation.book,
          status: "CANCELADO"
        };
        const response = await axios.put(`https://charming-happiness-production.up.railway.app/api/${type}/${selectedReservation.id}`, updatedReserva);
        if(response.status === 200) {
          setAlertMessage("Reserva cancelada con éxito.");
          setHistorial((prev) => prev.map(item => item.id === selectedReservation.id ? updatedReserva : item));
        } else {
          setAlertMessage("Error al cancelar la reserva.");
        }
        setTimeout(() => {
          setAlertMessage("");
        }, 4000);
      }
    } catch (error) {
      console.error("Error al cancelar la reserva", error);
      setAlertMessage("Error en el servidor, intenté más tarde.");
    }
    closeCancelModal();
  }

  // Obtener reservas
  useEffect(() => {
    const fetchHistorial = async () => {
      try {
        const response = await axios.get(`https://charming-happiness-production.up.railway.app/api/${type}/user/${user.id}`);
        setHistorial(response.data);
      } catch (error) {
        console.error("Error al obtener los registros", error);
      }
    };
    fetchHistorial();
  }, [type, user.id]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = {};
      await Promise.all(historial.map(async (item) => {
        if (!booksData[item.book]) {
          try {
            const response = await axios.get(`https://charming-happiness-production.up.railway.app/api/libro/${item.book}`);
            booksData[item.book] = response.data;
          } catch (error) {
            console.error("Error al obtener el libro", error);
          }
        }
      }));
      setBooks((prev) => ({ ...prev, ...booksData }));
    };
    if (historial.length > 0) {
      fetchBooks();
    }
  }, [historial]);

  const openCancelModal = (res) => {
    setSelectedReservation(res);
    setIsCancelModalOpen(true);
  };
  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
    setSelectedReservation(null);
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
        <OptionsButton title={`Mis ${type}s`} />
        <br />
        {alertMessage && (
            <div className="alert alert-warning">{alertMessage}</div>
          )}
        <div
          className="container"
          style={{ position: "relative", maxWidth: "90%" }}
        >
          {historial.map((item) => (
            <div
              key={item.id}
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
                onConfirm={deleteReservation}
              ></ModalWarning>
              
              <br />
              <div className="row g-0">
                <div className="col-md-2">
                  <img
                    src={books[item.book]?.coverPage}
                    alt={books[item.book]?.title}
                    style={{ width: "50%" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{books[item.book]?.title || "Cargando..."}</h5>
                    <p className="card-text">{books[item.book]?.description || "Cargando..."}</p>
                    <p>Fecha de {type}: {type==="reserva" ? item.reservationDate: item.loanDate}</p>
                    <p>
                      Fecha de vencimiento de {type}: {type==="reserva" ? item.reservationEndDate : item.devolutionDate}
                    </p>
                    <p>Estado: {item.status}</p>
                  </div>
                </div>
                {type==="reserva" && 
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
                    onClick={() => openCancelModal(item)}
                  >
                    Cancelar
                  </button>
                </div>
                }
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
