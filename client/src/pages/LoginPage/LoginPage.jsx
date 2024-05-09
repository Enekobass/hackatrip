import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import LoginForm from '../../forms/LoginForm/LoginForm';

const LoginPage = () => {
  const { authUser, authLogin, authLoading } = useContext(AuthContext);

  if (authUser) {
    return <Navigate to='/' />;
  }

  return (
    <main className='login'>
      <h1>Log in to Hackatrip</h1>
      <p className='subtitulo'>ÚNETE A LA COMUNIDAD MAS VIAJERA</p>
      

      <LoginForm authLogin={authLogin} authLoading={authLoading} />
    </main>
  );
};

export default LoginPage;
