import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import UserProfileForm from '../../forms/UserProfileForm/UserProfileForm.jsx';
import './UserProfilePage.css';

const { VITE_API_URL } = import.meta.env;

const UserProfilePage = () => {
    const { authUser, authEditUser, authEditUserAvatar, authLoading, setAuthLoading, setAuthToken } = useContext(AuthContext);

    // Redirige a la página "login" en caso de no estar logueado.
    if (!authUser) {
        return <Navigate to='/login' />;
    }

    return (
       <div>
        <main className='profile-page'>
            <h2>Perfil del Viajero</h2>

            <img src={ authUser.avatar ? `${VITE_API_URL}/${authUser.avatar}`: '/public/Fotos/Default_Avatar.jpg'
            }
            alt={`Avatar de ${authUser.username}`}
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
            />

            <p>{authUser.username}</p>

            <UserProfileForm
                authUser={authUser}
                authEditUser={authEditUser}
                authEditUserAvatar={authEditUserAvatar}
                authLoading={authLoading}
                setAuthLoading={setAuthLoading}
                setAuthToken={setAuthToken}
            />
        </main>
        </div>
    );
};

export default UserProfilePage;