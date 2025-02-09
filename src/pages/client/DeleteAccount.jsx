import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OptionsButton } from "../../components/OptionsButton";
import { ModalWarning } from "../../components/ModalWarning";

export const DeleteAccount = () => {
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);
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
    <div
      className="d-flex justify-content-center py-5"
      style={{
        position: "relative",
        width: "90%",
        marginBottom: "20%",
        marginLeft: "10%",
        top: "150px",
      }}
    >
      <div className="col-md-9">
        {alertMessage && (
          <div className="alert alert-warning">{alertMessage}</div>
        )}
        <OptionsButton title="Eliminar cuenta" />
        <form className="row g-3">
          <div className="col-md-5">
            <label className="form-label">
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
            className="btn mt-3 btn-secondary"
            style={{ width: "20%", marginRight: "1%" }}
            onClick={closeDeleteAccountModal}
          >
            Cancelar
          </button>
          <button
            className="btn mt-3 btn-danger"
            style={{ width: "20%" }}
            onClick={openDeleteAccountModal}
          >
            Eliminar
          </button>
          <ModalWarning
          title={"Eliminar cuenta"}
          message={"¿Estás seguro que deseas eliminar tu cuenta?"}
            isOpen={isDeleteAccountModalOpen}
            onClose={closeDeleteAccountModal}
            onConfirm={handleDeleteAccount}
          />
        </div>
      </div>
    </div>
  );
};
