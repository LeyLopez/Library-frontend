import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { OptionsButton } from '../../components/OptionsButton';

export const LoansList = () => {

  const [loans, setLoans] = useState([]);
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  const getLoans = async()=>{
    try{
      const response = await axios.get("http://localhost:8080/api/prestamo");
      if(response.status <= 200 && response.status < 300){
        setLoans(response.data);
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
    getLoans();
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
      for(const loan of loans){
        if(!booksData[loan.book]){
          booksData[loan.book] = await getBooks(loan.book);
        }
      }
      setBooks(booksData);
    }
    if(loans.length > 0){
      fetchBooks();
    }
  }, [loans]);





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
          <OptionsButton title={"Lista de préstamos realizados"}></OptionsButton>
          <div
            className="container"
            style={{ position: "relative", maxWidth: "90%" }}
          >
            {loans.map((loan) => (
              <div
                key={loan.id}
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
                      src={books[loan.book]?.image}
                      alt={books[loan.book]?.title}
                      style={{ width: "50%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{books[loan.book]?.title}</h5>
                      <p className="card-text">{books[loan.book]?.description}</p>
                      <p>Fecha de préstamo:{loan.loanDate || "Cargando..."}</p>
                      <p>Fecha de vencimiento:{loan.devolutionDate || "Cargando..."}</p>
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
