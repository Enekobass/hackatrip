import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const { authUser, authLogout } = useContext(AuthContext);

  return (
    <header>
      {authUser && (
        <div className='user-data'>
          <span>@{authUser.username}</span>
        </div>
      )}

      <nav>
        <label htmlFor='show-menu'>
          <img src='/menu-icon.png' alt='Icono de menú' />
        </label>
        <input type='checkbox' id='show-menu' />

        <ul className='nav-links'>
          {!authUser ? (
            <>
              {/* Si no estamos logueados (si existe usuario) mostramos el registro y el login. */}
              <li>
                <NavLink to='/register'>Registro</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            </>
          ) : (
            <>
              {/* Si estamos logueados (si existe usuario) mostramos el botón de cerrar sesión. */}

              <li>
                <button onClick={authLogout}>Cerrar sesión</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
