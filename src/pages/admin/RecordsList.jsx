import { useEffect, useState } from "react";
import axios from "axios";
import { OptionsButton } from "../../components/OptionsButton";

export const RecordsList = ({ type }) => {
  const [records, setRecords] = useState([]);
  const [books, setBooks] = useState({});
  const [message, setMessage] = useState("");

  

  useEffect(() => {
    const getRecords = async () => {
      try {
        const response = await axios.get(`https://charming-happiness-production.up.railway.app/api/${type}`);
        if (response.status >= 200 && response.status < 300) {
          setRecords(response.data);
          setMessage("");
        } else {
          setMessage("No hay registros disponibles.");
        }
      } catch (error) {
        console.error("Error al obtener los registros", error);
        setMessage("Error al obtener los registros.");
      }
    };
    getRecords();
  }, [type]);

  const getBook = async (id) => {
    try {
      const response = await axios.get(`https://charming-happiness-production.up.railway.app/api/libro/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener los libros", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = {};
      await Promise.all(
        records.map(async (record) => {
          if (!booksData[record.book]) {
            booksData[record.book] = await getBook(record.book);
          }
        })
      );
      setBooks((prev) => ({ ...prev, ...booksData }));
    };
    if (records.length > 0) {
      fetchBooks();
    }
  }, [records]);

  const formatDate = (isoDate) => {
    return isoDate ? isoDate.split('T')[0] : "";
  }

  return (
    <>
      <div
        className="d-flex justify-content-center py-5"
        style={{
          position: "relative",
          width: "90%",
          marginLeft: "10%",
          top: "150px",
        }}
      >
        <div className="col-md-9">
          <OptionsButton
            title={type === "reservation" ? "Lista de reservas realizadas" : "Lista de préstamos realizados"}
          />
          <div className="container" style={{ position: "relative", maxWidth: "90%" }}>
            {records.map((record) => (
              <div
                key={record.id}
                className="card mb-3"
                style={{
                  border: "none",
                  marginLeft: "10%",
                  width: "90%",
                  height: "20%",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={books[record.book]?.coverPage || "placeholder.jpg"}
                      alt={books[record.book]?.title || "Cargando..."}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{books[record.book]?.title || "Cargando..."}</h5>
                      <p className="card-text">Descripción: {books[record.book]?.description || "Cargando..."}</p>
                      <p>Fecha de {type === "reserva" ? "reserva" : "préstamo"}: {formatDate(record.reservationDate) || formatDate(record.loanDate) || "Cargando..."}</p>
                      <p>Fecha de vencimiento: {formatDate(record.reservationEndDate) || formatDate(record.devolutionDate) || "Cargando..."}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          {message && (
            <div
              className={`alert ${message.includes("Error") ? "alert-danger" : "alert-success"}`}
              role="alert"
              style={{
                position: "relative",
                width: "41%",
                marginTop: "10px",
              }}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
