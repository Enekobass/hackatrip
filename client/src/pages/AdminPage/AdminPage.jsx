import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import CreateUpdateTripForm from '../../forms/CreateUpdateTripForm/CreateUpdateTripForm';
import { createTripService } from '../../services/tripService.js';
const AdminPage = () => {
  const { authUser, authToken } = useContext(AuthContext);

  return (
    <main className='admin'>
      <h1>Panel de Administración</h1>

      {authUser && (
        <CreateUpdateTripForm createTripService={createTripService} authToken={authToken} />
      )}
    </main>
  );
};

export default AdminPage;
