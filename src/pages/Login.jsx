import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();


  return (
    <div className="container">
      <div className="d-flex justify-content-center pt-5">
        <div className="col-md-3">
          <form>
            <h1 className="h3 mb-3 fw-normal ">Iniciar sesión</h1>

            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>
            <div>
              <a href="" onClick={()=>navigate("/recoverpassword")}>¿Olvidaste tu contraseña?</a>
            </div>
            <button
              className="btn btn-primary w-100 py-2 my-2"
              type="submit"
              style={{
                backgroundColor: "#3DDC44",
                color: "#fff",
                border: "none",
              }}
              onClick={()=> navigate('/home')}
            >
              Ingresar
            </button>
            <button
              className="btn btn-primary w-100 py-2 my-1"
              type="submit"
              style={{
                backgroundColor: "#fff",
                color: "black",
                border: "#3DDC44 1px solid",
              }}
              onClick={()=> navigate('/signup')}
            >
              Quiero registrarme
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
