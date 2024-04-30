import PropType from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';

const RegisterForm = ({ authRegister, authLoading }) => {   
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [repeatedPass, setRepeatedPass] = useState('');
    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (pass === repeatedPass) {
            authRegister(username, email, pass);
        } else {
            toast.error('Las contraseñas no coinciden');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Usuario:</label>
            <input
                type='text'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete='username'
                required
            />

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

            <label htmlFor='repeatedPass'>Repetir contraseña:</label>
            <input
                type='password'
                id='repeatedPass'
                value={repeatedPass}
                onChange={(e) => setRepeatedPass(e.target.value)}
                autoComplete='new-password'
                required
            />

            <button disabled={authLoading}>Registrarse</button>
        </form>
    );
};

RegisterForm.propTypes = {
    authRegister: PropType.func.isRequired,
    authLoading: PropType.bool.isRequired,
};

export default RegisterForm;