  import React, { useState } from "react";
  import { OptionsButton } from "../../components/OptionsButton";
  import { useAuth } from "../../contexts/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

  export const ClientData = () => {

    const { user } = useAuth();
    const navigate = useNavigate();


    const formatDate = (isoDate) => {
      return isoDate ? isoDate.split('T')[0] : "";
    };
    
    const [formData, setFormData] = useState({
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      username: user.username ,
      kindOfDocument: user.kindOfDocument,
      documentNumber: user.documentNumber,
      dateOfBirth: new Date(user.dateOfBirth).toISOString().split('T')[0],
      phoneNumber: user.phoneNumber,
      address: user.address,
      password: user.password
    });

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccessMessage("");

      try {
        const response = await axios.put(`https://charming-happiness-production.up.railway.app/api/usuario/${user.id}`, formData);
        if(response.status >= 200 && response.status < 300) {
          setSuccessMessage("Usuario actualizado con éxito.");
          setFormData({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            username: user.username ,
            kindOfDocument: user.kindOfDocument,
            documentNumber: user.documentNumber,
            dateOfBirth: user.dateOfBirth,
            phoneNumber: user.phoneNumber,
            address: user.address,
            password: user.password
          });
          setTimeout(() => navigate("/clienthome"), 2000);
        }else{
          setError("Error al actualizar el usuario.");
        }
        

      } catch (error) {
        console.error("Error durante el registro:", error);
        setError("Error de conexión al servidor. Intente más tarde.");
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
          <OptionsButton title={"Mis datos"}></OptionsButton>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-5">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name ="name" onChange={handleInputChange} value={formData.name}/>
            </div>
            <div className="col-md-5">
              <label className="form-label">Apellido</label>
              <input type="text" className="form-control" name="lastname" onChange={handleInputChange} value={formData.lastname}/>
            </div>
            <div className="col-md-5">
              <label className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" name="email" onChange={handleInputChange} value={formData.email}/>
            </div>
            <div className="col-md-5">
              <label className="form-label col-md-3">Dirección</label>
              <input type="text" className="form-control" name="address" onChange={handleInputChange} value={formData.address}/>
            </div>
            <div className="col-md-5">
              <label className="form-label">Fecha de nacimiento</label>
              <input type="date" className="form-control" name="dateOfBirth" onChange={handleInputChange} value={formData.dateOfBirth} disabled/>
            </div>
            <div className="col-md-5">
              <label className="form-label">Teléfono</label>
              <input type="tel" className="form-control" name="phoneNumber" onChange={handleInputChange} value={formData.phoneNumber}/>
            </div>
            <div className="col-md-5">
                <label className="form-label">Tipo de documento</label>
                <select
                  className="form-select"
                  name="kindOfDocument"
                  value={formData.kindOfDocument}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione un tipo de documento...</option>
                  <option value="CEDULA">Cédula de ciudadanía</option>
                  <option value="TARJETA DE IDENTIDAD">Tarjeta de identidad</option>
                  <option value="CEDULA EXTRANJERIA">Cédula de extranjería</option>
                </select>
              </div>
            <div className="col-md-5">
              <label className="form-label">Número de documento</label>
              <input type="number" className="form-control" name="documentNumber" onChange={handleInputChange} value={formData.documentNumber} disabled/>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <button
              type="submit"
              className="btn mt-3"
              style={{
                position: "relative",
                margin: "30%",
                backgroundColor: "#14AE5C",
                color: "white",
                width: "20%",
              }}
            >
              Actualizar
            </button>
          </form>
            
        </div>
      </div>

    );
  };
