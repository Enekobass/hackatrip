import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import CreateUpdateTripForm from '../../forms/CreateUpdateTripForm/CreateUpdateTripForm';
import { createTripService } from '../../services/tripService.js';
const AdminPage = () => {
  const { authUser, authToken } = useContext(AuthContext);

  return (
    <main>
      <h2>Panel de Administración</h2>

      {authUser && (
        <CreateUpdateTripForm createTripService={createTripService} authToken={authToken} />
      )}
    </main>
  );
};

export default AdminPage;
