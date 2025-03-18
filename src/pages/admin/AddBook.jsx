import React, { useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import axios from "axios";
import { Navigate } from "react-router-dom";

export const AddBook = () => {
  const [alertMessage, setAlertMessage] = useState("");

  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    dateOfPublication: "",
    quantity: 0,
    author: 0,
    coverPage: "",
    genre: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/libro",
        newBook
      );

      if (response.status >= 200 && response.status < 300) {
        setAlertMessage("Libro agregado con éxito");
        setNewBook({
          title: "",
          description: "",
          dateOfPublication: "",
          quantity: 0,
          author: 0,
          coverPage: "",
          genre: 0,
        });
      } else {
        setAlertMessage("Error al agregar libro");
      }
    } catch (error) {
      setAlertMessage("Error al agregar libro");
      console.error("Error al agregar libro", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        position: "relative",
        width: "90%",
        marginBottom: "20%",
        marginLeft: "10%",
        top: "150px",
      }}
    >
      <div className="col-md-9">
        <OptionsButton title={"Agregar libro a la biblioteca"}></OptionsButton>
        <form
          className="row g-3"
          style={{ position: "relative" }}
          onSubmit={handleSubmit}
        >
          <div className="col-md-5">
            <label className="form-label" style={{ width: "100%" }}>
              Título
            </label>
            <input
              type="text"
              className="form-control"
              value={newBook.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Autor</label>
            <input
              type="text"
              className="form-control"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Año de publicación</label>
            <input
              type="text"
              className="form-control"
              value={newBook.dateOfPublication}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Género</label>
            <input type="text" className="form-control" value={newBook.genre} onChange={handleInputChange}/>
          </div>
          <div className="col-md-5">
            <label className="form-label">Cantidades disponibles</label>
            <input
              type="text"
              className="form-control"
              value={newBook.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Portada</label>
            <input
              type="text"
              className="form-control"
              value={newBook.coverPage}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Resumen</label>
            <input
              type="text"
              className="form-control"
              value={newBook.description}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div style={{ marginLeft: "30%" }}>
          <button
            type="button"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#fff",
              color: "black",
              width: "20%",
              marginRight: "1%",
            }}
            onClick={()=> Navigate("/booklist")}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#3DDC44",
              color: "white",
              width: "20%",
            }}
          >
            Agregar libro
          </button>
          <div>
            {alertMessage && (
              <div
                className="alert alert-success"
                role="alert"
                style={{
                  position: "relative",
                  width: "41%",
                  marginTop: "10px",
                }}
              >
                {alertMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
