import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo'>
          <img
            className='logo2'
            src='/Logo Color (sombra interior).png'
            alt='Logotipo'
          />
        </div>
        <div className='footer__nav'>
          <ul className='footer__nav-list'>
            <li><a href='/'>Inicio</a></li>
            <li><a href='/viaje/:viajeId'>Viajes</a></li>
            <li className='footer__nav-item'>
              <a href='/services'>Destinos</a>
              <ul className='footer__destinations'>
                <li><a href='/north-america'>América del Norte</a></li>
                <li><a href='/latin-america'>Latinoamérica</a></li>
                <li><a href='/africa'>África</a></li>
                <li><a href='/middle-east'>Oriente Medio</a></li>
                <li><a href='/asia'>Asia</a></li>
                <li><a href='/europe'>Europa</a></li>
                <li><a href='/northern-europe'>Norte de Europa</a></li>
                <li><a href='/spain-portugal'>España y Portugal</a></li>
              </ul>
            </li>
            <li className='footer__nav-item'>
            <a className='sublista' href='/services'>Fechas</a>
            <ul className='footer__destinations'>
              <li><a href='/north-america'>Marzo</a></li>
              <li><a href='/north-america'>Abril</a></li>
              <li><a href='/latin-america'>Mayo</a></li>
              <li><a href='/africa'>Junio</a></li>
              <li><a href='/middle-east'>Julio</a></li>
              <li><a href='/asia'>Agosto</a></li>
              <li><a href='/europe'>Septiembre</a></li>
              <li><a href='/northern-europe'>Octubre</a></li>
            </ul>
          </li>
            <li><a href='/comunity'>Comunidad</a></li>
            <li><a href='/contact'>Contacto</a></li>
          </ul>
        </div>
        <div className='footer__contact'>
          <p>Email: hackatripinfo@gmail.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className='footer__social'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src='/Facebook.png' alt='Facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src='/gorjeo.png' alt='Twitter' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src='/Instagram.png' alt='Instagram' />
          </a>
        </div>
        <div className='footer__rights'>
          <p>&copy; 2024 HACKATRIP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
