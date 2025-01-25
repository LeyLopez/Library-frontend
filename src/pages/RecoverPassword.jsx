import React from 'react'

export const RecoverPassword = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="body-content">
    <div className="container">
      <div className="d-flex justify-content-center pt-5">
        <div className="col-md-3">
          <form>
            <h1 className="h3 mb-3 fw-normal ">Restablecer contraseña</h1>
            
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <p>Se enviarán a su correo los pasos para recuperar la contraseña de su cuenta.</p>
            <button
              className="btn btn-primary w-100 py-12 my-1"
              type="submit"
              style={{
                backgroundColor: "#3DDC44",
                color: "#fff",
                border: "none",
              }}
              onClick={()=> navigate('/login')}
            >
              Restaurar
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
