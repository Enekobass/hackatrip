import PropType from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext(null);

import toast from 'react-hot-toast';
import {
  getPrivateProfileService,
  signInService,
  signUpService,
  recoverPassword,
  changePassword,
  editProfileService,
} from '../services/userService';

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') || null
  );

  const [authUser, setAuthUser] = useState(null);

  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setAuthLoading(true);

        const user = await getPrivateProfileService(authToken);

        setAuthUser(user);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setAuthLoading(false);
      }
    };

   if (authToken) {
     fetchUser();
   }
  }, [authToken]);

  // Función de registro
  const authRegister = async (username, email, password) => {
    try {
      setAuthLoading(true);

      const message = await signUpService(username, email, password);

      toast.success(message);

      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  // Función de login
  const authLogin = async (email, password) => {
    try {
      setAuthLoading(true);

      const authToken = await signInService(email, password);

      setAuthToken(authToken);

      localStorage.setItem('authToken', authToken);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const authRecoverPassword = async (email) => {
    try {
      setAuthLoading(true);

      const message = await recoverPassword(email);

      toast.success(message);

      navigate('/changepassword');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const authChangePassword = async (email, newPass, recoverPassCode) => {
    try {
      setAuthLoading(true);

      const message = await changePassword(email, newPass, recoverPassCode);

      toast.success(message);

      navigate('/login');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAuthLoading(false);
    }
  };


// Función para editar perfil de usuario.
const authEditUser = async (username, email, pass, confirmPass) => {
  try {
    setAuthLoading(true);

    const message = await editProfileService(username, email, pass, confirmPass);

    toast.success(message);

    navigate('/profile');
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAuthLoading(false);
      setAuthToken(null);
    }
};

  // Función de cerrar sesión.
  const authLogout = () => {
    setAuthUser(null);

    setAuthToken(null);

    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        authUser,
        authRegister,
        authLogin,
        authEditUser,
        authLogout,
        authLoading,
        authRecoverPassword,
        authChangePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropType.node.isRequired,
};
