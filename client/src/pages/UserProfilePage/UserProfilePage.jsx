import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import UserProfileForm from '../../forms/UserProfileForm/UserProfileForm';

const { VITE_API_URL } = import.meta.env;

//import './UserProfilePage.css';

const UserProfilePage = () => {
    const { authUser, authEditUser, authEditUserAvatar, authLoading } =
        useContext(AuthContext);

    return (
        <main>
            {authUser && (
                <>
                    <h2>Perfil</h2>

                    <img
                    src={
                        authUser.avatar
                            ? `${VITE_API_URL}/${authUser.avatar}`
                            : '/default-avatar.jpg'
                        }
                    alt={`Avatar de ${authUser.username}`}
                    />

                    <UserProfileForm
                    authUser={authUser}
                    authEditUser={authEditUser}
                    authEditUserAvatar={authEditUserAvatar}
                    authLoading={authLoading}
                    />
                </>
            )}
        </main>
    );
};

export default UserProfilePage;
