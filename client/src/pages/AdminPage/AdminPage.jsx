import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import CreateUpdateTripForm from '../../forms/CreateUpdateTripForm/CreateUpdateTripForm';
import { createTripService } from '../../services/tripService.js';
const AdminPage = () => {
  const { authUser, authToken } = useContext(AuthContext);

  if (!authUser) {
    // Si no hay un usuario autenticado, redirige a la página de inicio de sesión
    return <Navigate to='/login' />;
  }

  return (
    <main>
      <h2>Panel de Administración</h2>

      <CreateUpdateTripForm createTripService = {createTripService} authToken = {authToken}/>
    </main>
  );
};

export default AdminPage;
