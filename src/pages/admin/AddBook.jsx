import React, { useEffect, useState } from "react";
import { OptionsButton } from "../../components/OptionsButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ModalAddAuthor } from "../../components/ModalAddAuthor";

export const AddBook = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [genres, setGenres] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [newBook, setNewBook] = useState({
    title: "",
    description: "",
    dateOfPublication: "",
    quantity: 0,
    author: 0,
    coverPage: "",
    genre: 0,
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorsResponse = await axios.get("http://localhost:8080/api/autor");
        const genresResponse = await axios.get("http://localhost:8080/api/genero");
        setAuthors(authorsResponse.data);
        setGenres(genresResponse.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

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
    <>
    
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
              name="title"
              className="form-control"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="col-md-5">
            <label className="form-label">Resumen</label>
            <input
              type="text"
              name="description"
              className="form-control"
              value={newBook.description}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-md-5">
            <label className="form-label">Fecha de publicación</label>
            <input
              type="date"
              name="dateOfPublication"
              className="form-control"
              value={newBook.dateOfPublication}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Género</label>
            <select className="form-select" name="genre" value={newBook.genre} onChange={handleInputChange} required>
              <option value="0">Seleccione un género</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.name}</option>
              ))}
            </select>
          </div>
          <div className="col-md-5">
            <label className="form-label">Cantidades disponibles</label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              value={newBook.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Portada</label>
            <input
              type="text"
              name="coverPage"
              className="form-control"
              value={newBook.coverPage}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="col-md-5">
            <label className="form-label">Autor</label>
            <select className="form-select" name="author" value={newBook.author} onChange={handleInputChange}>
              <option value="0">Seleccione un autor</option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>{author.name}</option>
              ))}
            </select>
            
          </div>
          {/* <div className="col-md-2 mt-5">
          <button className="btn btn-outline-success" onClick={handleOpenModal}>Agregar autor</button>
          </div> */}
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
            onClick={()=> navigate("/booklist")}
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
            onClick={handleSubmit}
          >
            Agregar libro
          </button>
          <div>
            {alertMessage && (
              <div
                className={`alert ${alertMessage.includes("Error") ? "alert-danger" : "alert-success"}`}
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
    {/* <ModalAddAuthor isOpen={openModal} onClose = {()=>setOpenModal(false)}/> */}
    </>
  );
};
