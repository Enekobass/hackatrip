import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import RegisterForm from '../../forms/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const { authUser, authRegister, authLoading } = useContext(AuthContext);

  if (authUser) {
    return <Navigate to='/' />;
  }

  return (
    <main>
      <h2>Registro</h2>

      <RegisterForm authRegister={authRegister} authLoading={authLoading} />
    </main>
  );
};

export default RegisterPage;
