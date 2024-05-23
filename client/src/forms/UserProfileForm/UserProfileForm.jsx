import PropType from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-hot-toast';


const UserProfileForm = ({
    authEditUser,
    authLoading,
    setAuthLoading,
    setAuthToken
}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [avatar, setAvatar] = useState(null);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        if (pass !== confirmPass) {
            toast.error("Las contraseñas no coinciden");
            return;
        }
        authEditUser(username, email, pass, confirmPass, avatar,  setAuthLoading, setAuthToken);
    };

    /*const handleAvatarSubmit = (e) => {
        e.preventDefault();
        authEditUserAvatar(avatar);
    };*/

    return (
        <div className='profile-container'>
            <form onSubmit={handleProfileSubmit}>
                <div className='profile-form'>
                    <label htmlFor='Username'>Usuario:</label>
                    <input
                    type='text'
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

                    <label htmlFor='Pass'>Contraseña:</label>
                    <input
                    type='pass'
                    id='pass'
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    autoComplete='Nueva Contraseña'
                    />

                    <label htmlFor='confirmPass'>Confirmar contraseña:</label>
                    <input
                    type='pass'
                    id='confirmPass'
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    autoComplete='Nueva Contraseña'
                    />

                    <label htmlFor='Avatar'>Avatar:</label>
                    <input
                    type='file'
                    onChange={(e) => setAvatar(e.target.files[0])}
                    accept='image/png, image/jpeg'
                    />
                </div>
                <button className="editProfile" disabled={authLoading}>Editar</button>
            </form>
            
        </div>
    );
};

UserProfileForm.propTypes = {
    authUser: PropType.object.isRequired,
    authEditUser: PropType.func.isRequired,
    authEditUserAvatar: PropType.func.isRequired,
    authLoading: PropType.bool.isRequired,
    setAuthLoading: PropType.func.isRequired,
    setAuthToken: PropType.func.isRequired,

};

export default UserProfileForm;