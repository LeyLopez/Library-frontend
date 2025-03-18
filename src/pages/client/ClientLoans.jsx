import React, { useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import { useAuth } from "../../contexts/AuthProvider";
import axios from "axios";

export const ClientLoans = () => {
  const [loans, setLoans] = useState([]);

  const { user } = useAuth();

  const getLoans = async () => {
    try {
      // Petición GET al servidor
      const response = await axios.get(`http://localhost:8080/api/prestamo/user/${user.id}`);
      setLoans(response.data);
    } catch (error) {
      console.error("Error al obtener los préstamos", error);
    }
  };

  useEffect(() => {
    getLoans();
  }, []);

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
        <OptionsButton title={"Mis préstamos"} />
        <br />
        <div className="container" style={{ position: "relative", maxWidth: "90%" }}>
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="card mb-3"
              style={{
                border: "none",
                marginLeft: "10%",
                width: "80%",
                height: "10%",
              }}
            >
              <div className="row g-0">
                {/* <div className="col-md-3">
                  <img src={loan.image} alt={loan.title} style={{ width: "50%" }} />
                </div> */}
                <div className="col-md-8">
                  <div className="card-body">
                    {/* <h5 className="card-title">{loan.title}</h5>
                    <p>Autor: {loan.author}</p> */}
                    <p>Fecha de préstamo: {loan.loanDate}</p>
                    <p>Fecha de vencimiento de préstamo: {loan.devolutionDate}</p>
                  </div>
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
