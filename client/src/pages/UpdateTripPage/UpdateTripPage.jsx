import { useParams } from 'react-router-dom';
import UpdateTripForm from '../../forms/UpdateTripForm/UpdateTripForm'

import useTrip from '../../hooks/useTrip';

const UpdateTripPage = () => {

    const params = useParams();

    const viajeId = params.viajeId;

    const { trip } = useTrip(viajeId);

    return (
        <>
            <main>
                {trip && (
                        <>
                            <UpdateTripForm trip={trip} />
                        </>
                    )}
            </main>
        </>
    );
};

export default UpdateTripPage;
