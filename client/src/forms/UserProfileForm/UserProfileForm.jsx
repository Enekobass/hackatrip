import PropType from 'prop-types';

import { useState } from 'react';

const UserProfileForm = ({
    authUser,
    authEditUser,
    authEditUserAvatar,
    authLoading,
}) => {
    const [username, setUsername] = useState(authUser.username);
    const [email, setEmail] = useState(authUser.email);
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState('');

    const handleAvatarSubmit = (e) => {
        e.preventDefault();

        authEditUserAvatar(avatar);
    };

    const handleUsernameEmailSubmit = (e) => {
        e.preventDefault();

        authEditUser(username, email, password);
    };

    return (
        <>
            <form onSubmit={handleAvatarSubmit}>
                <input
                    type='file'
                    onChange={(e) => setAvatar(e.target.files[0])}
                    accept='image/png, image/jpeg'
                    required
                />
                <button>Editar</button>
            </form>

            <form onSubmit={handleUsernameEmailSubmit}>
                <label htmlFor='username'>Usuario:</label>
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

                <label htmlFor='pass'>Contraseña:</label>
                    <input
                        type='password'
                        id='pass'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='password'
                        required
                />

                <button disabled={authLoading}>Editar</button>
            </form>
        </>
    );
};

// Validamos las props.
UserProfileForm.propTypes = {
    authUser: PropType.object.isRequired,
    authEditUser: PropType.func.isRequired,
    authEditUserAvatar: PropType.func.isRequired,
    authLoading: PropType.bool.isRequired,
};

export default UserProfileForm;
