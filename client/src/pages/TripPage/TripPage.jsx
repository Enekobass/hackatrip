import { useContext } from 'react';

import { useParams } from 'react-router-dom';

import useTrip from '../../hooks/useTrip.js';

import TripInfo from '../../components/entryTripInfo/EntryTripInfo.jsx';

import AddVoteForm from '../../forms/AddVoteForm/AddVoteForm';

import { AuthContext } from '../../contexts/AuthContext';

import { insertTripVoteService } from '../../services/tripService.js';

import Header from '../../components/Header/Header';

import './TripPage.css';

const TripPage = () => {

    const { authUser, authToken } = useContext(AuthContext);

    const { viajeId } = useParams();

    const { trip, addTripVote } = useTrip(viajeId);

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    };

    const today = new Date();

    const imgSrc = '/Home.jpg'

    return (
        <>
            <Header imgSrc={imgSrc}/>
            <main>
                {trip && (
                    <>
                        <h2>{trip.titulo}</h2>

                        <TripInfo
                            destino={trip.tripData[0].destino}
                            titulo={trip.tripData[0].titulo}
                            descripcion={trip.tripData[0].descripcion}
                            fechaDeInicio={trip.tripData[0].fechaDeInicio}
                            fechaDeFin={trip.tripData[0].fechaDeFin}
                            plazasMinimas={trip.tripData[0].plazasMinimas}
                            plazasMaximas={trip.tripData[0].plazasMaximas}
                            itinerario={trip.tripData[0].itinerario}
                            precio={trip.tripData[0].precio}
                            grupoDeEdad={trip.tripData[0].grupoDeEdad}
                            photo={trip.tripData[0].imagen}
                            activo={trip.tripData[0].activo}
                            confirmado={trip.tripData[0].confirmado}
                            id={trip.tripData[0].id}
                            authToken={authToken}
                        />


                        {authUser?.role === "admin" ? 
                            <button className='btn-editar' onClick={() => window.location.href = `/editar-viaje/${viajeId}`}> Editar viaje </button> : console.log()}

                        {formatDate(trip.tripData[0].fechaDeFin) < formatDate(today) ? 
                        
                        <>
                            <AddVoteForm
                                insertTripVoteService={insertTripVoteService}
                                addTripVote={addTripVote}
                                tripId={trip.tripData[0].id}
                                coordinador={trip.coordinador}
                                avgValue={trip.avgValue}
                                authUser={authUser}
                                authToken={authToken}
                            />

                            <button className='btn-sube-post'onClick={() => window.location.href = `/viaje/${viajeId}/loadpost`}> Sube un post </button>

                        </>
                        : 
                        <div>
                            <p>¡Cuando acabe el viaje podrás votar aquí al coordinador del viaje!</p>
                        </div>
                        }


                    </>
                )}
            </main>
        </>
    );
};

export default TripPage;

