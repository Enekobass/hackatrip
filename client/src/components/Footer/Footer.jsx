import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__logo'>
          <img
            className='logo2'
            src='/Logos/Logo Color (sombra interior).png'
            alt='Logotipo'
          />
        </div>
        <div className='footer__nav'>
          <ul>
            <li><a href='/about'>Sobre Nosotros</a></li>
            <li><a href='/services'>Servicios</a></li>
            <li><a href='/contact'>Contacto</a></li>
            <li><a href='/privacy'>Política de Privacidad</a></li>
          </ul>
        </div>
        <div className='footer__contact'>
          <p>Email: hackatripinfo@gmail.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className='footer__social'>
          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src='/icons/facebook.png' alt='Facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src='/icons/twitter.png' alt='Twitter' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AInstagram_icon.png&psig=AOvVaw2BGBcaJ5ak_tqF-rCIARRL&ust=1716488267428000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiPypzvoYYDFQAAAAAdAAAAABAE' alt='Instagram' />
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
