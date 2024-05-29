import PropType from 'prop-types';

import FilterTrips from "../../components/FilterTrips/FilterTrips";
import Header from "../../components/Header/Header";
import useTrips from "../../hooks/useTrips";

import imgSrc from '/Home.jpg';

const DestinosPage = ({ setTripsFiltrados }) => {

    const { trips, loading } = useTrips(setTripsFiltrados);

  return (
    <main>
        <Header imgSrc={imgSrc}/>
        <FilterTrips loading={loading} trips={trips}/>
    </main>
  );
};

DestinosPage.propTypes = {
    setTripsFiltrados: PropType.func.isRequired,
  };

export default DestinosPage;
