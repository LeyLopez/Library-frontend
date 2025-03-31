import React, { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RecoverPasswordAuth = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    username: user.username,
    kindOfDocument: user.kindOfDocument,
    documentNumber: user.documentNumber,
    dateOfBirth: new Date(user.dateOfBirth).toISOString().split('T')[0],
    phoneNumber: user.phoneNumber,
    address: user.address,
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    if (formData.password !== confirmPassword) {
      setAlertMessage("Las contraseñas no coinciden. Por favor, intente de nuevo.");
      return;
    }

    const response = await axios.put(`http://localhost:8080/api/usuario/${user.id}`, formData);
    if (response.status >= 200 && response.status < 300) {
      setAlertMessage("Su contraseña ha sido actualizada con éxito.");
      setFormData({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        kindOfDocument: user.kindOfDocument,
        documentNumber: user.documentNumber,
        dateOfBirth: user.dateOfBirth,
        phoneNumber: user.phoneNumber,
        address: user.address,
        password: ""
      });
      setConfirmPassword("");

      setTimeout(() => {navigate("/login");
        logout();
        window.location.reload(); // Recargar la página para reflejar el cambio de estado
      }, 2000);
    };
  }

  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        position: "relative",
        width: "90%",
        marginBottom: "20%",
        marginLeft: "10%",
        top: "150px"
      }}
    >
      <div className="col-md-9">
        <h2 className="h3 mb-3">Cambiar contraseña</h2>
        {alertMessage && <div className="alert alert-warning">{alertMessage}</div>}
        <form className="row g-3" style={{ position: "relative" }} onSubmit={handleRecoverPassword}>
          <div className="col-md-5">
            <label className="form-label">Nueva contraseña</label>
            <input type="password" name = "password" className="form-control" value={formData.password} onChange={handleInputChange}/>
          </div>
          <div className="col-md-5">
            <label className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
          </div>
        </form>
        <div style={{ marginLeft: "30%" }}>
          <button
            type="submit"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#fff",
              color: "black",
              width: "20%",
              marginRight: "1%"
            }}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#35C529",
              color: "white",
              width: "20%",
            }}
            onClick={handleRecoverPassword}
          >
            Actualizar
          </button>
        </div>
      </div>
    </div>
  );
};
