import React from 'react'

export const AdminSidebar = () => {
  return (
    <div >
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{width: "20%", backgroundColor: "#ffff"}}
      >

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page" style={{backgroundColor: "#3DDC44"}}>
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Mis préstamos
            </a>
          </li>
          <li>
            <a href="#" className="nav-link link-body-emphasis">
              <svg className="bi pe-none me-2" width="16" height="16">
                
              </svg>
              Mis reservas
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
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu text-small shadow" style={{}}>
            <li>
              <a className="dropdown-item" href="#">
                Mis datos
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cambiar contraseña
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Eliminar cuenta
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
