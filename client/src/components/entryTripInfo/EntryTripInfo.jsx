import PropTypes from 'prop-types';
import './EntryTripInfo.css';

const { VITE_API_URL, VITE_GOOGLE_MAPS_API_KEY, VITE_MAP_ID } = import.meta.env;

import { bookTripService } from '../../services/tripService';

import toast from 'react-hot-toast';

import {APIProvider, Map, AdvancedMarker, Pin, InfoWindow, } from "@vis.gl/react-google-maps"
import { useState } from 'react';

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

const TripInfo = ({
  destino,
  titulo,
  descripcion,
  fechaDeInicio,
  fechaDeFin,
  plazasMinimas,
  plazasMaximas,
  itinerario,
  lat,
  lng,
  precio,
  grupoDeEdad,
  photo,
  activo,
  confirmado,
  id,
  authToken,
}) => {
  const handleClick = async (e) => {
    try {
      e.preventDefault();

      const book = await bookTripService(id, authToken);

      toast.success(book);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const position = { lat: lat, lng: lng};

  const [open, setOpen] = useState(false)

  return (
    <form>
      <div className='entry-header'>
        <div className='title-container'>
          <h1 className='title'>{titulo}</h1>
        </div>

        <div className='extra-content'>
          <h2>Apúntate a este viaje </h2>
          <div className='frasesExtraContent'>
            <p className='viviras'>
              Vivirás experiencias únicas con gente de tu edad
            </p>
            <p className='nuevos'>Nuevos amigos para siempre</p>
            <p className='acompañado'>
              Acompañado de un coordinador experimentado en la zona
            </p>
            <p className='recuerdos'>Recuerdos para toda la vida</p>
            <div className='button-container'></div>
            <button onClick={handleClick} className='signup-button'>
              Apuntarme
            </button>
          </div>
        </div>

        <div className='place-overlay'>
          <strong></strong> {destino}
        </div>

        <div className='dates-overlay'>
          <span className='fecha-in'>{formatDate(fechaDeInicio)}</span>
          <span>-</span>
          <span className='fecha-fin'>{formatDate(fechaDeFin)}</span>
        </div>
      </div>

      <div className='edad'>
        <strong>Grupo de edad:</strong> {grupoDeEdad}
      </div>

      <ul className='entry-details'>
        <li className='description'>
          <strong></strong> {descripcion}
        </li>

        <img
          src={`${VITE_API_URL}/${photo}`}
          alt={`Foto de ${destino}`}
          className='entry-image'
        />
        <li className='itinerary'>
          <h2>Itinerario</h2>
          <div className='route'>
            <strong></strong> {itinerario}
          </div>
        </li>
        <li className='hidden'>
          <strong>Plazas mínimas:</strong> {plazasMinimas}
        </li>
        <li className='hidden'>
          <strong>Plazas máximas:</strong> {plazasMaximas}
        </li>
{/* 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d102477.73576302624!2d-4.6696376049198705!3d36.61605317510837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1717012936012!5m2!1ses!2ses"
          width="400"
          height="300"
          allowFullScreen=""
          loading="lazy"
          >
        </iframe> */}

        <APIProvider apiKey={VITE_GOOGLE_MAPS_API_KEY}>
          <div style={{height: "40vh", width: "30vw"}}>
            <Map defaultZoom={9} defaultCenter={position} mapId={VITE_MAP_ID}>
              <AdvancedMarker position={position} onClick={() => setOpen(true)}>
                <Pin background={"lightblue"} borderColor={"black"} glyphColor={"black"}/>
              </AdvancedMarker>
              {open && (
                <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
                  <p>Hotel</p>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>

        <div className='price-overlay'>
          <strong>Precio:</strong> {precio} €
        </div>

        <li className='hidden'>
          <strong></strong> {activo}
        </li>
        <li className='hidden'>
          <strong></strong> {confirmado}
        </li>
      </ul>
    </form>
  );
};

TripInfo.propTypes = {
  destino: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  fechaDeInicio: PropTypes.string.isRequired,
  fechaDeFin: PropTypes.string.isRequired,
  plazasMinimas: PropTypes.number.isRequired,
  plazasMaximas: PropTypes.number.isRequired,
  itinerario: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  grupoDeEdad: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  activo: PropTypes.number.isRequired,
  confirmado: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  authToken: PropTypes.string,
};

export default TripInfo;
