import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { OptionsButton } from '../../components/OptionsButton';

export const ReservationList = () => {
  
  const [reservations, setReservations] = useState([]);
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  const getReservations = async()=>{
    try{
      const response = await axios.get("http://localhost:8080/api/reserva");
      if(response.status <= 200 && response.status < 300){
        setReservations(response.data);
        setMessage("");
      }
      else{
        setMessage("No hay prestamos disponibles.");
      }
    }
    catch(error){
      console.error("Error al obtener los prestamos", error);
      setMessage("Error al obtener los prestamos.");
    }
  }

  useEffect(()=>{
    getReservations();
  }, []);

  const getBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/libro`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener los libros", error);
    }
  };

  useEffect(() => {
    const fetchBooks = async()=>{
      const booksData = {};
      for(const reservation of reservations){
        if(!booksData[reservation.book]){
          booksData[reservation.book] = await getBooks(reservation.book);
        }
      }
      setBooks(booksData);
    }
    if(reservations.length > 0){
      fetchBooks();
    }
  }, [reservations]);





  return (
    <>
      <div
        className="d-flex justify-content-center py-5"
        style={{
          position: "relative",
          width: "90%",
          marginLeft: "10%",

          top: "150px"
        }}
      >

        <div className="col-md-9">
          <OptionsButton title={"Lista de reservas realizadas"}></OptionsButton>
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
                  width: "90%",
                  height: "20%",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-2">
                    <img
                      src={books[reservation.book]?.image}
                      alt={books[reservation.book]?.title}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{books[reservation.book]?.title}</h5>
                      <p className="card-text">{books[reservation.book]?.description}</p>
                      <p>Fecha de préstamo:{reservation.reservationDate || "Cargando..."}</p>
                      <p>Fecha de vencimiento:{reservation.reservationEndDate || "Cargando..."}</p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

}
