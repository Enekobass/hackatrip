import PropType from 'prop-types';
import { useState } from 'react';

const UserProfileForm = ({
    authUser,
    authEditUser,
    authEditUserAvatar,
    authLoading
}) => {
    const [username, setUsername] = useState(authUser.username);
    const [email, setEmail] = useState(authUser.email);
    const [password, setPassword] = useState(authUser.password);
    const [confirmPassword, setConfirmPassword] = useState(authUser.confirmPassword);
    const [avatar, setAvatar] = useState(null);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        authEditUser(username, email, password, confirmPassword);
    };

    const handleAvatarSubmit = (e) => {
        e.preventDefault();
        authEditUserAvatar(avatar);
    };

    return (
        <>
            <form onSubmit={handleProfileSubmit}>
                <label htmlFor='Username'>Usuario:</label>
                <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='username'
                />

                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='email'
                />

                <label htmlFor='Password'>Contraseña:</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='Nueva Contraseña'
                />

                <label htmlFor='confirmPassword'>Confirmar contraseña:</label>
                <input
                    type='password'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    autoComplete='Nueva Contraseña'
                />

                <button disabled={authLoading}>Editar</button>
            </form>

            <form onSubmit={handleAvatarSubmit}>
                <input
                    type='file'
                    onChange={(e) => setAvatar(e.target.files[0])}
                    accept='image/png, image/jpeg'
                    required
                />
                <button>Editar</button>
            </form>

        </>
    );
};

UserProfileForm.propTypes = {
    authUser: PropType.object.isRequired,
    authEditUser: PropType.func.isRequired,
    authEditUserAvatar: PropType.func.isRequired,
    authLoading: PropType.bool.isRequired,
};

export default UserProfileForm;