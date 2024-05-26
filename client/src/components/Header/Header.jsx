import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ setTripsFiltrados, imageSrc}) => {
  const { authUser, authLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const goToHome = () => {
    setTripsFiltrados(false);
    navigate('/');
  };

  return (
    <header className='header'>
      <nav>
        <img src={imageSrc} alt="Header" />
        <div htmlFor='show-menu'>
          <img
            onClick={goToHome}
            className='logo1'
            src='/Logos/Logo Blanco (sombra interior).png'
            alt='Logotipo'
          />
        </div>

        <ul className="nav-menu">
                <li><a href="#fechas">Fechas</a></li>
                <li><a href="#destinos">Destinos</a></li>
                <li><a href="#comunidad">Comunidad</a></li>
                <li><a href="#grupos-de-edad">Grupos de Edad</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>

        <div className='contenedorFrasePortada'>
          <p className='frasePortada'>
            Viajar es la única cosa que compras y te hace más rico
          </p>
        </div>

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

              <div className='user-data'>
                <span>@{authUser.username}</span>
              </div>

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

Header.propTypes = {
  setTripsFiltrados: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Header;
