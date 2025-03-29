import { useEffect, useState } from "react";
import { bookService } from "../../api/bookService";
import axios from "axios";
import { OptionsButton } from "../../components/OptionsButton";

export const RecordsList = ({ type }) => {
  const [records, setRecords] = useState([]);
  const [books, setBooks] = useState({});
  const [message, setMessage] = useState("");
  const endpoint = type === "reservation" ? "reserva" : "prestamo";

  const getRecords = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/${endpoint}`);
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

  useEffect(() => {
    getRecords();
  }, []);

  const getBooks = async (id) => {
    try {
      const response = await bookService.getBookById(id);
      return response.data;
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = {};
      for (const record of records) {
        if (!booksData[record.book]) {
          booksData[record.book] = await getBooks(record.book);
        }
      }
      setBooks((prev) => ({ ...prev, ...booksData }));
    };
    if (records.length > 0) {
      fetchBooks();
    }
  }, [records]);

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
                      src={books[record.book]?.coverPage}
                      alt={books[record.book]?.title}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{books[record.book]?.title}</h5>
                      <p className="card-text">Descripción: {books[record.book]?.description}</p>
                      <p>Fecha de {type === "reservation" ? "reserva" : "préstamo"}:{record.reservationDate || record.loanDate || "Cargando..."}</p>
                      <p>Fecha de vencimiento:{record.reservationEndDate || record.devolutionDate || "Cargando..."}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              
            ))}
          </div>
          <div>
            {message && (
              <div
                className={`alert ${alertMessage.includes("Error") ? "alert-danger" : "alert-success"}`}
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
      </div>
    </>
  );
};