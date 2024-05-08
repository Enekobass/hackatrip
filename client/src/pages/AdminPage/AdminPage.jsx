import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import CreateUpdateTripForm from '../../forms/CreateUpdateTripForm/CreateUpdateTripForm';

const AdminPage = () => {
  const { authUser } = useContext(AuthContext);
  
  // Define la función handleSubmit para manejar el envío del formulario en AdminPage
  const handleSubmit = () => {
    // Muestra un mensaje de alerta indicando que el usuario no es administrador
    alert('No es admin');
  };

  return (
    <main>
      <h2>Página de Administrador</h2>

      {/* Verifica si el usuario está autenticado antes de mostrar el formulario */}
      {authUser && (
        <CreateUpdateTripForm onSubmit={handleSubmit} />
      )}
      
      {/* Aquí puedes agregar otros componentes o funcionalidades de administrador */}
    </main>
  );
};

export default AdminPage;
