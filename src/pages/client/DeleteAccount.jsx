import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OptionsButton } from "../../components/OptionsButton";

export const DeleteAccountConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <div className={`modal fade ${isOpen ? "show d-block" : ""}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar eliminación</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que deseas eliminar tu cuenta?</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-danger" onClick={onConfirm}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeleteAccount = () => {
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const navigate = useNavigate();

  const openDeleteAccountModal = () => setIsDeleteAccountModalOpen(true);
  const closeDeleteAccountModal = () => setIsDeleteAccountModalOpen(false);

  const handleDeleteAccount = () => {
    closeDeleteAccountModal();

    setAlertMessage("Eliminando cuenta"); 

    setTimeout(() => {
      setAlertMessage("Cuenta eliminada con éxito."); 

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="d-flex justify-content-center py-5" style={{ position: "relative", width: "90%", marginBottom: "20%", marginLeft: "10%", top: "150px" }}>
      <div className="col-md-9">
        {alertMessage && <div className="alert alert-warning">{alertMessage}</div>}
        <OptionsButton title="Eliminar cuenta" />
        <form className="row g-3">
          <div className="col-md-5">
            <label className="form-label">Ingrese su contraseña para eliminar</label>
            <input type="password" className="form-control" />
          </div>
          <div className="col-md-5">
            <label className="form-label">Confirmar contraseña</label>
            <input type="password" className="form-control" />
          </div>
        </form>
        <div style={{ marginLeft: "30%" }}>
          <button className="btn mt-3 btn-secondary" style={{ width: "20%", marginRight: "1%" }} onClick={closeDeleteAccountModal}>
            Cancelar
          </button>
          <button className="btn mt-3 btn-danger" style={{ width: "20%" }} onClick={openDeleteAccountModal}>
            Eliminar
          </button>
          <DeleteAccountConfirmationModal isOpen={isDeleteAccountModalOpen} onClose={closeDeleteAccountModal} onConfirm={handleDeleteAccount} />
        </div>
      </div>
    </div>
  );
};
