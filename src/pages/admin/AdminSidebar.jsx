import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AdminSidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="container"
    style={{
      position: "fixed",
      alignItems: "left",
      width: "90%",
      height:"100%",
      boxSizing: "content-box",
      top: "200px",
    }}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{width: "20%", backgroundColor: "#ffff"}}
      >

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page" style={{backgroundColor: "#3DDC44"}} onClick={() => navigate("/booklist")}>
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis" onClick={() => navigate("/addbook")}>
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Agregar libro
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis" onClick={() => navigate("/updatebook")}>
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Modificar libro
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis" onClick={() => navigate("/deletebook")}>
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Eliminar libro
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis" onClick={() => navigate("/recoverpasswordauth")}>
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Cambiar contraseña
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Cerrar sesión
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Administrator</strong>
          </a>
          
        </div>
      </div>
    </div>
  )
}
