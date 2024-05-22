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
            <img src='../../public/logos/facebook.png' alt='Facebook' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src='../../public/logos/gorjeo.png' alt='Twitter' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src='../../public/logos/instagram.png' alt='Instagram' />
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
