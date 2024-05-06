import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import CreateUpdateTripForm from '../../forms/CreateUpdateTripForm/CreateUpdateTripForm';

const AdminPage = () => {
  const { authUser } = useContext(AuthContext);

  // Verificar si el usuario está autenticado como administrador
  if (!authUser || !authUser.isAdmin) {
    // Si no está autenticado o no es un administrador, redirige a la página de inicio
    return <Navigate to='/' />;
  }

  return (
    <main>
      <h2>Página de Administrador</h2>

      <CreateUpdateTripForm onSubmit={handleSubmit} />
      {/* Aquí puedes agregar otros componentes o funcionalidades de administrador */}
    </main>
  );
};

export default AdminPage;
