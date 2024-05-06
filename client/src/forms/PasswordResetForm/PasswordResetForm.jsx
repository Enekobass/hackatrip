// PasswordResetForm.js
import React, { useState } from 'react';
import './PasswordResetForm.css';

const PasswordResetForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí se puede agregar la lógica para enviar el correo de recuperación de contraseña
    console.log('Enviar correo de recuperación de contraseña a:', email);
    // Aquí se puede agregar llamadas a API, etc.
  };

  return (
    <div className="password-reset-form-container">
      <h2>Recuperación de Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Enviar Correo de Recuperación</button>
      </form>
    </div>
  );
};

export default PasswordResetForm;
