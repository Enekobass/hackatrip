import useTrips from '../../hooks/useTrips';

import SearchForm from '../../forms/SearchForm/SearchForm';

import TripListItem from '../../components/TripListItem/TripListItem';

import './HomePage.css';

const HomePage = () => {
  const { trips, setSearchParams, loading } = useTrips();

  return (
    <main>
      <SearchForm setSearchParams={setSearchParams} loading={loading} />

      <div>
        <img className='ofertas' src='/Logos/Publi.png' alt='Ofertas' />
      </div>

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

      <div>
        <img className='saberMas' src='/Logos/Saber mas.png' alt='saber mas' />
        <button className='botonSaberMas'>Saber más</button>
      </div>

      <div className='comunity'>
        <p>Comparte tus vivencias en Hackatrip con nosotros y con el resto de viajeros</p>
        <button className='facebook'>Grupo de Facebook
        <img className='iconFacebook' src="/Logos/Facebook" alt="Logo de Facebook" /></button>
        <button className='comunidad'>Únete a la comundad HAT</button>
        <button className='instagram'>Síguenos en Instagram
        <img className="iconInstagram" src="/Logos/Instagram" alt="Logo de Instagram" /></button>
      </div>
    </main>
  );
};

export default HomePage;
