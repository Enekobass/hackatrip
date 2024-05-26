import './Home.css';

const Home = () => {
    return (
        <>
            <div className='saber-mas'>
                <img
                className='img-grande'
                src='/Logos/Saber mas.png'
                alt='saber mas'
                />
                <button className='botonSaberMas'>¡Saber más!</button>
            </div>
        
            <div className='comunity'>
                <p>
                Comparte tus vivencias en Hackatrip con nosotros y con el resto de
                viajeros
                </p>
                <div className='botones'>
                <button className='facebook'>
                    Grupo de Facebook
                    <img
                    className='iconFacebook'
                    src='/Logos/Facebook.png'
                    alt='Logo de Facebook'
                    />
                </button>
                <button className='comunidad'>Únete a la comundad HAT</button>
                <button className='instagram'>
                    Síguenos en Instagram
                    <img
                    className='iconInstagram'
                    src='/Logos/Instagram.png'
                    alt='Logo de Instagram'
                    />
                </button>
                </div>
            </div>
        
            <div className='frases'>
                <div className='como'>
                <img src='/Fotos/como.jpg' alt='' />
                </div>
                <div className='quien'>
                <img src='/Fotos/quien.jpg' alt='' />
                </div>
                <div className='que'>
                <img src='/Fotos/que.jpeg' alt='' />
                </div>
                <div className='sostenible'>
                <img src='/Fotos/sostenible.jpg' alt='' />
                </div>
            </div>
        
            <h2 className='textoProximos'>Nuestros Proximos viajes:</h2>
        </>
    );
}

export default Home;