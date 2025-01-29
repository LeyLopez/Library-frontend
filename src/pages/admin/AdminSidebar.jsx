import { useNavigate, useLocation } from "react-router-dom";

export const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  
  const menuItems = [
    { path: "/booklist", label: "Inicio" },
    { path: "/addbook", label: "Agregar libro" },
    { path: "/deletebook", label: "Eliminar libro" },
    { path: "/updatebook", label: "Modificar libro" },
    { path: "/recoverpasswordauth", label: "Cambiar contraseña" },
    { path: "/login", label: "Cerrar sesión" },
  ];

  return (
    <div
      className="container"
      style={{
        position: "fixed",
        width: "90%",
        height: "100%",
        boxSizing: "content-box",
        top: "200px",
      }}
    >
      <div
        className="d-flex flex-column flex-shrink-0 p-3"
        style={{ width: "20%", backgroundColor: "#ffff" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <a
                href="#"
                className={`nav-link ${
                  location.pathname === item.path ? "active" : "link-body-emphasis"
                }`}
                style={{
                  backgroundColor: location.pathname === item.path ? "#3DDC44" : "transparent",
                }}
                onClick={() => navigate(item.path)}
              >
                <svg className="bi pe-none me-2" width="16" height="16"></svg>
                {item.label}
              </a>
            </li>
          ))}
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
  );
};

