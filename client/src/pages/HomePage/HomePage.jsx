import useTrips from '../../hooks/useTrips';

import SearchForm from '../../forms/SearchForm/SearchForm';

import TripListItem from '../../components/TripListItem/TripListItem';

import './HomePage.css';

const HomePage = () => {

  const {
    trips,
    setSearchParams,
    loading,
} = useTrips();


  return (
    <main>

      <SearchForm setSearchParams={setSearchParams} loading={loading} />

      <h2 className='textoIdeas'>TE DAMOS IDEAS:</h2>
      <ul className='trip-list'>
                {trips.length < 1 && loading ? (
                    <p>Cargando</p>
                ) : trips.length === 0 ? (
                    <li>¡No se ha encontrado ningún resultado!</li>
                ) : (
                    trips.map((trip) => {
                        return <TripListItem key={trip.id} trip={trip} />;
                    })
                )}
            </ul>
    </main>
  );
};

export default HomePage;
