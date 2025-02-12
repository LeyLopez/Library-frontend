import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const success = login(username, password);
    if (success) {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.role === "admin") {
        navigate("/booklist");
      } else if (user?.role === "cliente") {
        navigate("/clienthome");
      }
    } else {
      alert("Credenciales incorrectas"); // Opcional: Manejo de error
    }
  };

  return (
    <div className="body-content">
      <div className="container">
        <div className="d-flex justify-content-center pt-5">
          <div className="col-md-3">
            <form onSubmit={(e) => e.preventDefault()}>
              <h1 className="h3 mb-3 fw-normal">Iniciar sesión</h1>

              <div className="form-floating">
                <input
                  type="text" // Cambiado de email a text
                  className="form-control"
                  id="floatingInput"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingInput">Usuario</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Contraseña</label>
              </div>
              <div>
                <a href="#" onClick={(e) => {
                  e.preventDefault();
                  navigate("/recoverpassword");
                }}>
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <button
                className="btn w-100 py-2 my-2"
                type="button"
                style={{
                  backgroundColor: "#3DDC44",
                  color: "#fff",
                  border: "none",
                }}
                onClick={handleLogin}
              >
                Ingresar
              </button>
              <button
                className="btn btn-primary w-100 py-2 my-1"
                type="button"
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                  border: "#3DDC44 1px solid",
                }}
                onClick={() => navigate("/signup")}
              >
                Quiero registrarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
