import PropType from 'prop-types';
import './LoginForm.css';
import { useState } from 'react';

const LoginForm = ({ authLogin, authLoading }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    authLogin(email, pass);
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <div className='login-form'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='email'
            required
          />

          <label htmlFor='pass'>Contraseña:</label>
          <input
            type='password'
            id='pass'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            autoComplete='new-password'
            required
          />
        </div>
        <button className='boton-login' disabled={authLoading}>Login</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  authLogin: PropType.func.isRequired,
  authLoading: PropType.bool.isRequired,
};

export default LoginForm;
