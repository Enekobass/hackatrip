import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import CreateUpdateTripForm from '../../forms/CreateUpdateTripForm/CreateUpdateTripForm';

const AdminPage = () => {
  const { authUser } = useContext(AuthContext);
  
  // Define la función handleSubmit para manejar el envío del formulario en AdminPage
  const handleSubmit = (formData) => {
    // Lógica para enviar los datos del formulario al servidor
    console.log('Formulario enviado:', formData);
  };

  // Verificar si el usuario está autenticado como administrador
  if (!authUser || !authUser.isAdmin) {
    // Si no está autenticado o no es un administrador, redirige a la página de inicio
    return <Navigate to='/' />;
  }

  return (
    <main>
      <h2>Página de Administrador</h2>

      {/* Pasa handleSubmit como prop al formulario CreateUpdateTripForm */}
      <CreateUpdateTripForm onSubmit={handleSubmit} />
      {/* Aquí puedes agregar otros componentes o funcionalidades de administrador */}
    </main>
  );
};

export default AdminPage;
