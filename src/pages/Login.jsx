import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

export const Login = () => {
  const { login, isAuthenticated, roles } = useAuth();
  const navigate = useNavigate();
  
  const [loginRequest, setLoginRequest] = useState({
    username: "",
    password: ""
  })

  const [alertMessage, setAlertMessage] = useState("");


  const showError = (error) => {
    console.log({severity:'error', summary: 'Error', detail:`${error}`, life: 3000});
}


  useEffect(()=>{
    if(isAuthenticated && roles.length>0){
      if (roles.includes("ROLE_ADMIN")) {
        navigate("/booklist");
      } else if (roles.includes("ROLE_USER")) {
        navigate("/clienthome");
      }
    }
  },[isAuthenticated, roles]);

  const handleLogin = async() => {
    try {
      const response = await login(loginRequest); // Ejecutar la función de login
      if (response.status === 200) {
        setAlertMessage("Iniciando sesión...");
      }else{
        setAlertMessage("Error al iniciar sesión, verifica las credenciales");
        showError('Error al iniciar sesión, verifica las credenciales');
        setTimeout(()=>{
            setAlertMessage("");
        }, 5000);
      }
    } catch (error) {
      setAlertMessage("Error al iniciar sesión, verifica las credenciales");
      showError('Error al iniciar sesión, verifica las credenciales');
      setTimeout(()=>{
          setAlertMessage("");
      }, 5000);
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
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Usuario"
                  value={loginRequest.username}
                  required
                  onChange={(e) => {setLoginRequest({...loginRequest, username: e.target.value})}}
                />
                <label htmlFor="floatingInput">Usuario</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  required
                  value={loginRequest.password}
                  onChange={(e) => setLoginRequest({...loginRequest, password: e.target.value})}
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
              {alertMessage && <div className="alert alert-warning" style={{ marginTop: "10px" }}>{alertMessage}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
