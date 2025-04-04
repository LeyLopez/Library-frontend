import axios from 'axios';
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthProvider';

export const ModalAddAuthor = ({ isOpen, onClose }) => {
  const [newAuthor, setNewAuthor] = useState({
    name: '',
    lastName: '',
    dateOfBirth: '',
  });

  const { token } = useAuth();
  const [alertMessage, setAlertMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAuthor((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAuthor = async () => {
    if (!newAuthor.name || !newAuthor.lastName || !newAuthor.dateOfBirth) {
      setAlertMessage('Por favor complete todos los campos.');
      return;
    }

    try {
      await axios.post('https://charming-happiness-production.up.railway.app/api/autor', newAuthor);
      setNewAuthor({ name: '', lastName: '', dateOfBirth: '' });
      setAlertMessage('Autor agregado exitosamente.');
      
      setTimeout(() => {
        setAlertMessage('');
        onClose();
      }, 1500);
    } catch (error) {
      console.error('Error adding author', error);
      setAlertMessage('Error al agregar el autor.');
    }
  };

  return (
    <div className={`modal fade ${isOpen ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar autor</h5>
          </div>
          <div className="modal-body">
            {alertMessage && (
              <div className={`alert ${alertMessage.includes('exitosamente') ? 'alert-success' : 'alert-danger'}`}>
                {alertMessage}
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={newAuthor.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={newAuthor.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha de nacimiento</label>
              <input
                type="date"
                name="dateOfBirth"
                className="form-control"
                value={newAuthor.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button type="button" className="btn btn-danger" onClick={handleAddAuthor}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
