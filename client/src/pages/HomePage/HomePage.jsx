import PropType from 'prop-types';

import useTrips from '../../hooks/useTrips';

import SearchForm from '../../forms/SearchForm/SearchForm';

import TripListItem from '../../components/TripListItem/TripListItem';

import FilterTrips from "../../components/FilterTrips/FilterTrips"

import './HomePage.css';

const HomePage = ({setTripsFiltrados, tripsFiltrados}) => {

  const { trips, setSearchParams, loading } = useTrips(setTripsFiltrados);

  return (
    <main>
      <SearchForm setSearchParams={setSearchParams} loading={loading} setTripsFiltrados={setTripsFiltrados} />

      <div>
        <img className='ofertas' src='/Logos/Publi.png' alt='Ofertas' />
      </div>

      <h2 className='textoIdeas'>TE DAMOS IDEAS:</h2>
      {!tripsFiltrados? (
        <ul className='video-list'>
          {trips.length === 0 ? (
              <p>Ningún viaje a la vista</p>
            ) : (
              <TripListItem/>
            )}
          </ul>
        ) : (
            <FilterTrips loading={loading} trips={trips} />)}

      <div>
        <img className='saberMas' src='/Logos/Saber mas.png' alt='saber mas' />
        <button className='botonSaberMas'>Saber más</button>
      </div>

      <div className='comunity'>
        <p>Comparte tus vivencias en Hackatrip con nosotros y con el resto de viajeros</p>
        <button className='facebook'>Grupo de Facebook
        <img className='iconFacebook' src="/Logos/Facebook.png" alt="Logo de Facebook" /></button>
        <button className='comunidad'>Únete a la comundad HAT</button>
        <button className='instagram'>Síguenos en Instagram
        <img className="iconInstagram" src="/Logos/Instagram.png" alt="Logo de Instagram" /></button>
      </div>
    </main>
  );
};

HomePage.propTypes = {
  setTripsFiltrados: PropType.func.isRequired,
  tripsFiltrados: PropType.bool.isRequired,
};

export default HomePage;
