import PropType from 'prop-types';

import useTrips from '../../hooks/useTrips';

import SearchForm from '../../forms/SearchForm/SearchForm';

import TripListItem from '../../components/TripListItem/TripListItem';

import FilterTrips from '../../components/FilterTrips/FilterTrips';

import './HomePage.css';

const HomePage = ({ setTripsFiltrados, tripsFiltrados }) => {
  const { trips, setSearchParams, loading } = useTrips(setTripsFiltrados);

  return (
    <main>
      <SearchForm
        setSearchParams={setSearchParams}
        loading={loading}
        setTripsFiltrados={setTripsFiltrados}
      />

      <div className='ofertas-container'>
        <img className='ofertas' src='/Logos/Publi.png' alt='Ofertas' />
        </div>
      

      <h2 className='textoIdeas'>TE DAMOS IDEAS:</h2>
      {!tripsFiltrados ? (
        <ul className='video-list'>
          {trips.length === 0 ? (
            <p>Ningún viaje a la vista</p>
          ) : (
            <TripListItem />
          )}
        </ul>
      ) : (
        <FilterTrips loading={loading} trips={trips} />
      )}

      <div className='saber-container'>
        <img className='saberMas' src='/Logos/Saber mas.png' alt='saber mas' />
        <button className='botonSaberMas'>¡Saber más!</button>
      </div>

      <div className='comunity'>
        <p>
          Comparte tus vivencias en Hackatrip con nosotros y con el resto de
          viajeros
        </p>
        <div className='facebook'>
          <button className='facebookButton'>
            Grupo de Facebook
            <img
              className='iconFacebook'
              src='/Logos/Facebook.png'
              alt='Logo de Facebook'
            />
          </button>
        </div>
        <div className='comunidad'>
          <button>Únete a la comundad HAT</button>
        </div>
        <div className='instagram'>
          <button className='instagramButton'>
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
        <div className='como'></div>
        <div className='quien'></div>
        <div className='que'></div>
        <div className='sostenible'></div>
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
