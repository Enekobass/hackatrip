import { useParams } from 'react-router-dom';
import useTrip from '../../hooks/useTrip.js';

import EntryTripInfo from '../../components/entryTripInfo/EntryTripInfo.jsx';

// import { selectTripByIdService } from '../../services/tripService';

const TripPage = () => {

    const { viajeId } = useParams();

    const { trip } = useTrip(viajeId);

    return (
        <main>
            {trip && (
                <>
                    <h2>{trip.titulo}</h2>

                    <EntryTripInfo
                        destino={trip.tripData[0].destino}
                        titulo={trip.tripData[0].titulo}
                        descripcion={trip.tripData[0].descripcion}
                        fechaDeInicio={trip.tripData[0].fechaDeInicio}
                        fechaDeFin={trip.tripData[0].fechaDeFin}
                        plazasMinimas={trip.tripData[0].plazasMinimas}
                        plazasMaximas={trip.tripData[0].plazasMaximas}
                        ruta={trip.tripData[0].ruta}
                        precio={trip.tripData[0].precio}
                        photo={trip.tripData[0].imagen}
                        activo={trip.tripData[0].activo}
                        confirmado={trip.tripData[0].confirmado}

                    />

                </>
            )}
        </main>
    );
};

export default TripPage;
