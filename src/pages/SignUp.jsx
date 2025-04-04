import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    kindOfDocument: "",
    documentNumber: "",
    dateOfBirth: "",
    phoneNumber: "",
    address: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (formData.password !== confirmPassword) {
      setError("Las contraseñas no coinciden. Por favor, intente de nuevo.");
      return;
    }

    try {
      const response = await axios.post("https://charming-happiness-production.up.railway.app/api/auth/signup", formData);

      if (response.status >= 200 && response.status < 300) {
        setSuccessMessage("Usuario registrado con éxito. Ahora puede iniciar sesión.");
        setFormData({
          name: "",
          lastname: "",
          email: "",
          username: "",
          password: "",
          kindOfDocument: "",
          documentNumber: "",
          dateOfBirth: "",
          phoneNumber: "",
          address: "",
        });
        setConfirmPassword("");
        setTimeout(() => navigate("/login"), 2000); // Redirigir tras éxito
      } else {
        setError("Error al registrar al usuario.");
      }
    } catch (err) {
      console.error("Error durante el registro:", err);
      setError("Error de conexión al servidor. Intente más tarde.");
    }
  };

  return (
    <div className="body-content" style={{ top: "50px" }}>
      <div className="d-flex justify-content-center pt-5">
        <div className="col-md-6">
          <h1 className="h3 mb-3 fw-normal">Registro</h1>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Usuario</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Fecha de nacimiento</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Teléfono</label>
              <input
                type="tel"
                className="form-control"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-md-4">
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
            <div className="col-md-4">
              <label className="form-label">Número de documento</label>
              <input
                type="number"
                className="form-control"
                name="documentNumber"
                value={formData.documentNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}

            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary w-50 py-2 my-2"
                type="submit"
                style={{
                  backgroundColor: "#3DDC44",
                  color: "#fff",
                  border: "none",
                }}
              >
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
