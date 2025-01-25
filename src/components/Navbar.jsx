import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{position:"relative", top:"150px"}}>
      <nav className="navbar navbar-expand" aria-label="Second navbar example">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-5">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Opciones
                </a>
              </li>
            </ul>
            <form
              role="search"
              style={{
                position: "relative",
                width: "90%",
              }}
            >
              <input
                type="search"
                className="form-control"
                placeholder="Ingresa aquí el nombre del libro que deseas buscar..."
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav px-5">
              <li className="nav-item">
                <button type="button" className="btn position-relative" onClick={() => navigate("/clientnotifications")}>
                  Notificaciones
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
