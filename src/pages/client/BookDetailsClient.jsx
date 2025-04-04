import React, { useContext, useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import { BookContext } from "../../contexts/BookProvider";
import { useAuth } from "../../contexts/AuthProvider";
import axios from "axios";

export const BookDetails = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const { book, author, genre } = useContext(BookContext);
  const { user } = useAuth();

  const handleAction = async (type) => {
    const today = new Date();
    const endDate = new Date();
    endDate.setMonth(today.getMonth() + 2);

    let requestData;

    if (type === "reserva") {
      requestData = {
        reservationDate: today.toISOString().split("T")[0],
        reservationEndDate: endDate.toISOString().split("T")[0],
        statusChangeDate: today.toISOString().split("T")[0],
        user: user.id,
        book: book.id,
        status: "RESERVADO",
      };
    } else {
      requestData = {
        loanDate: today.toISOString().split("T")[0],
        devolutionDate: endDate.toISOString().split("T")[0],
        statusChangeDate: today.toISOString().split("T")[0],
        user: user.id,
        book: book.id,
        status: "PRESTADO",
      };
    }

    try {
      const response = await axios.post(`https://charming-happiness-production.up.railway.app/api/${type}`, requestData);

      if (response.status >= 200 && response.status < 300) {
        setAlertMessage(`El libro "${book.title}" ha sido ${type === "reserva" ? "reservado" : "prestado"} exitosamente.`);
      } else {
        setAlertMessage("Error al procesar la solicitud.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setAlertMessage("Error en la conexión con el servidor.");
    }
  };

  const formatDate = (isoDate) => {
    return isoDate ? isoDate.split('T')[0] : "";
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center py-5" style={{ position: "relative", width: "90%", marginBottom: "20%", marginLeft: "10%", top: "150px" }}>
        <div className="col-md-9">
          <OptionsButton title={"Detalles del libro"} />
          <div className="container" style={{ position: "relative", maxWidth: "70%", marginTop: "2%" }}>
            <div className="card mb-3" style={{ maxWidth: "100%" }}>
              <div className="row">
                <div className="col-md-4">
                  <img src={book.coverPage} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Título: {book.title}</h5>
                    <p className="card-text">Resumen {book.description}</p>
                    <p>Autor: {author.name}</p>
                    <p>Año de publicación: {formatDate(book.dateOfPublication)}</p>
                    <p>Género: {genre.name}</p>
                  </div>
                </div>
              </div>
            </div>
            {alertMessage && <div className="alert alert-warning" style={{ marginTop: "10px" }}>{alertMessage}</div>}
            <div style={{ marginLeft: "30%" }}>
              <button type="button" className="btn mt-3" style={{ borderColor: "black", backgroundColor: "#fff", color: "black", width: "30%" }} onClick={() => handleAction("reserva")}>
                Reservar
              </button>
              <button type="button" className="btn mt-3" style={{ borderColor: "black", backgroundColor: "#35C529", color: "white", width: "30%" }} onClick={() => handleAction("prestamo")}>
                Prestar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
