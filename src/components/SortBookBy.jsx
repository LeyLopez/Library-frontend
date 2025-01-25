import React from 'react'

export const SortBookBy = () => {
  return (
    <div style={{ position: "relative", width: "90%", marginLeft: "20%", top: "150px", zIndex:"5" }}> 
      <div className="btn-group">
        <p
          style={{
            position: "relative",
            marginLeft: "50%",
            marginBottom: 0,
            paddingLeft: 12,
            paddingRight: 12,
            paddingBottom: 6,
            paddingTop: 6
          }}
        >
          Ordenar por
        </p>
        <button
          type="button"
          className="btn dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            position: "relative",
            marginLeft: "20%",
            borderRadius: 10,
          }}
        >
          Género
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Comedia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Romance
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Terror
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Ficción
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Fantasía
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="btn dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            position: "relative",
            marginLeft: "20%",
            marginBottom: 0,
            borderRadius: 10,
          }}
        >
          Tipo de ejemplar
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Enciclopedia
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Diccionario
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Literatura
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Biografía
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Atlas
            </a>
          </li>
        </ul>
      </div>
      <br />
    </div>

        
  )
}
