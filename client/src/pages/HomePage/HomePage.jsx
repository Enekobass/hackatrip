import PropType from 'prop-types';

import useTrips from '../../hooks/useTrips';

import SearchForm from '../../forms/SearchForm/SearchForm';

import TripListItem from '../../components/TripListItem/TripListItem';

import FilterTrips from '../../components/FilterTrips/FilterTrips';

import './HomePage.css';

const HomePage = ({ setTripsFiltrados, tripsFiltrados }) => {
  const { trips, setSearchParams, loading } = useTrips(setTripsFiltrados);

  let sixTrips = [];

  for (let i = 0; i < 6; i++) {
    sixTrips.push(trips[i]);
  }

  return (
    <main>
      <SearchForm
        setSearchParams={setSearchParams}
        loading={loading}
        setTripsFiltrados={setTripsFiltrados}
      />

      <div className='ofertas'>
        <img src='/Logos/Publi.png' alt='Ofertas' />
      </div>

      <h2 className='textoIdeas'>TE DAMOS IDEAS:</h2>
      {!tripsFiltrados ? (
        <ul className='trip-list'>
          {trips.length === 0 ? (
            <p>Ningún viaje a la vista</p>
          ) : (
            <TripListItem sixTrips={sixTrips} />
          )}
        </ul>
      ) : (
        <FilterTrips loading={loading} trips={trips} />
      )}

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
          <img src='/Fotos/Home.jpg' alt='' />
        </div>
      </div>

      <h2 className='textoProximos'>Nuestros Proximos viajes:</h2>
    </main>
  );
};

HomePage.propTypes = {
  setTripsFiltrados: PropType.func.isRequired,
  tripsFiltrados: PropType.bool.isRequired,
};

export default HomePage;
