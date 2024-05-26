import './Home.css';

const Home = () => {
    return (
        <>
            <div className='saber-mas'>
                <img
                className='img-grande'
                src='/Saber mas.png'
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
                    src='/Facebook.png'
                    alt='Logo de Facebook'
                    />
                </button>
                <button className='comunidad'>Únete a la comundad HAT</button>
                <button className='instagram'>
                    Síguenos en Instagram
                    <img
                    className='iconInstagram'
                    src='/Instagram.png'
                    alt='Logo de Instagram'
                    />
                </button>
                </div>
            </div>
        
            <div className='frases'>
                <div className='como'>
                <img src='/como.jpg' alt='' />
                </div>
                <div className='quien'>
                <img src='/quien.jpg' alt='' />
                </div>
                <div className='que'>
                <img src='/que.jpeg' alt='' />
                </div>
                <div className='sostenible'>
                <img src='/sostenible.jpg' alt='' />
                </div>
            </div>
        
            <h2 className='textoProximos'>Nuestros Proximos viajes:</h2>
        </>
    );
}

export default Home;