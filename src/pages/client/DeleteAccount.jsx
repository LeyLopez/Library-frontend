import { useState } from "react";

export const DeleteAccountConfirmationModal = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null; // Solo muestra el modal si está abierto

  return (
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose} // Cierra el modal al hacer clic
            ></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export const DeleteAccount = () => {
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);

  const openDeleteAccountModal = () => setIsDeleteAccountModalOpen(true);
  const closeDeleteAccountModal = () => setIsDeleteAccountModalOpen(false);

  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{
        position: "relative",
        width: "90%",
        marginBottom: "20%",
        marginLeft: "10%",
      }}
    >
      <div className="col-md-9">
        <h2 className="h3 mb-3">Eliminar cuenta</h2>
        <form className="row g-3" style={{ position: "relative" }}>
          <div className="col-md-5">
            <label className="form-label" style={{ width: "100%" }}>
              Ingrese su contraseña para eliminar
            </label>
            <input type="password" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" />
          </div>
        </form>
        <div style={{ marginLeft: "30%" }}>
          <button
            type="button"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "#fff",
              color: "black",
              width: "20%",
              marginRight: "1%",
            }}
            onClick={closeDeleteAccountModal} // Cierra el modal
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn mt-3"
            style={{
              position: "relative",
              borderColor: "black",
              backgroundColor: "red",
              color: "white",
              width: "20%",
            }}
            onClick={openDeleteAccountModal} // Abre el modal
          >
            Eliminar
          </button>
          <DeleteAccountConfirmationModal
            isOpen={isDeleteAccountModalOpen} // Valor booleano
            onClose={closeDeleteAccountModal} // Referencia de función
          >
            <h5 className="modal-title">Confirmar eliminación</h5>
            <div className="modal-body">
              <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeDeleteAccountModal} // Cierra el modal
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-danger">
                Confirmar
              </button>
            </div>
          </DeleteAccountConfirmationModal>
        </div>
      </div>
    </div>
  );
};
