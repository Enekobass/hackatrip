import PropType from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.css';

const Header = ({ setTripsFiltrados, imgSrc }) => {
  const { authUser, authLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('destino'));

  const goToHome = () => {
    if (setTripsFiltrados) {
      setTripsFiltrados(false);
    }
    navigate('/');
  };

  return (
    <header className='header'>
      <img className='imgheader' src={imgSrc} alt='Home' />
      <nav className='nav-container'>
        <div htmlFor='show-menu'>
          <img
            onClick={goToHome}
            className='logo1'
            src='/Logo Blanco (sombra interior).png'
            alt='Logotipo'
          />
        </div>

        <ul className='nav-menu'>
          <li>
            <a href='#fechas'>Fechas</a>
          </li>
          <li>
            <a href='#destinos'>Destinos</a>
          </li>
          <li>
            <a href='#comunidad'>Comunidad</a>
          </li>
          <li>
            <a href='#grupos-de-edad'>Grupos de Edad</a>
          </li>
          <li>
            <a href='#contacto'>Contacto</a>
          </li>
        </ul>

        <ul className='nav-links'>
          {!authUser ? (
            <>
              <li>
                <NavLink to='/register'>Registro</NavLink>
              </li>
              <li>
                <NavLink to='/login'>Login</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <button>{authUser.username}</button>
              </li>
              <li>
                <button onClick={authLogout}>Cerrar sesión</button>
              </li>
            </>
          )}
        </ul>
      </nav>

      <div className='contenedorFrasePortada'>
        {searchParams.get('destino') ? (
          <p className='frasePortada'>{searchParams.get('destino')}</p>
        ) : (
          <p className='frasePortada'>
            Viajar es la única cosa que compras y te hace más rico
          </p>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  setTripsFiltrados: PropType.func,
};

export default Header;
