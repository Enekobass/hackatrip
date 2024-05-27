import PropType from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.css';

const Header = ({ setTripsFiltrados, imgSrc }) => {
  const { authUser, authLogout } = useContext(AuthContext);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const goToHome = () => {
    if(setTripsFiltrados) {
      setTripsFiltrados(false);
    }
    navigate('/');
  };

  return (
    <header className='header'>
      <img className='imgheader' src={imgSrc} alt="Home" />
      <nav>
        <div htmlFor='show-menu'>
          <img
            onClick={goToHome}
            className='logo1'
            src='/Logo Blanco (sombra interior).png'
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
          {/* {searchParams.get("destino") ?
          <p className='frasePortada'>
            {searchParams.get("destino")}
          </p>
          :
          <p className='frasePortada'>
            Viajar es la única cosa que compras y te hace más rico
          </p>} */}
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
    </header>
  );
};

Header.propTypes = {
  setTripsFiltrados: PropType.func,
};

export default Header;