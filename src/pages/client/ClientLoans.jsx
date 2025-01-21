import React from "react";
import { OptionsButton } from "../../components/OptionsButton";

export const ClientLoans = () => {
  const loans = [
    {
      id: 1,
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      loanDate: "2025-01-10",
      dueDate: "2025-01-20",
      image: "cienaniossoledad.jpg",
    },
    {
      id: 2,
      title: "Don Quijote de la Mancha",
      author: "Miguel de Cervantes",
      loanDate: "2025-01-11",
      dueDate: "2025-01-21",
      image: "donquijote.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      loanDate: "2025-01-12",
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
                <div className="col-md-3">
                  <img src={loan.image} alt={loan.title} style={{ width: "50%" }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{loan.title}</h5>
                    <p>Autor: {loan.author}</p>
                    <p>Fecha de préstamo: {loan.loanDate}</p>
                    <p>Fecha de vencimiento de préstamo: {loan.dueDate}</p>
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
