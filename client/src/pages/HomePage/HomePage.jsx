import PropType from 'prop-types';

import useTrips from '../../hooks/useTrips';

import SearchForm from '../../forms/SearchForm/SearchForm';

import TripListItem from '../../components/TripListItem/TripListItem';

import FilterTrips from '../../components/FilterTrips/FilterTrips';

import Home from '../../components/Home/Home';

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
        <>
          <ul className='trip-list'>
            {trips.length === 0 ? (
              <p>Ningún viaje a la vista</p>
            ) : (
              <TripListItem sixTrips={sixTrips} />
            )}
          </ul>
          <Home />
        </>
      ) : (
        <ul className='trip-list'>
          {trips.length === 0 ? (
            <p>Ningún viaje a la vista</p>
          ) : (
            <FilterTrips loading={loading} trips={trips} />
          )}
        </ul>
      )}
    </main>
  );
};

HomePage.propTypes = {
  setTripsFiltrados: PropType.func.isRequired,
  tripsFiltrados: PropType.bool.isRequired,
};

export default HomePage;
