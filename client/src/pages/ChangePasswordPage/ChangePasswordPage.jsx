import ChangePasswordForm from '../../forms/ChangePasswordForm/ChangePasswordForm';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const ChangePasswordPage = () => {
  const { authChangePassword } = useContext(AuthContext);
  return (
    <main>
      <h2>Cambiar Contraseña</h2>

      <ChangePasswordForm authChangePassword={authChangePassword} />
    </main>
  );
};

export default ChangePasswordPage;
