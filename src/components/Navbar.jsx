import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand" aria-label="Second navbar example">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-5">
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
                <button type="button" class="btn position-relative">
                  Notificaciones
                  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span class="visually-hidden">New alerts</span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
