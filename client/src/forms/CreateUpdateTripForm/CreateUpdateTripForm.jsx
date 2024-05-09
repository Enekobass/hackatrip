import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateUpdateTripForm = ({ createTripService, authToken }) => {

  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [destino, setDestino] = useState('');
  const [fechaDeInicio, setFechaDeInicio] = useState('');
  const [fechaDeFin, setFechaDeFin] = useState('');
  const [plazasMinimas, setPlazasMinimas] = useState(0);
  const [plazasMaximas, setPlazasMaximas] = useState(0);
  const [ruta, setRuta] = useState('');
  const [precio, setPrecio] = useState(0);
  const [activo, setActivo] = useState('');
  const [confirmado, setConfirmado] = useState(0);
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    const message = await createTripService({
      titulo,
      descripcion,
      destino,
      fechaDeInicio,
      fechaDeFin,
      plazasMinimas,
      plazasMaximas,
      ruta,
      precio,
      activo,
      confirmado,
      photo,
      authToken,
  });

  toast.success(message);
   navigate('/');
  } catch(error){
    toast.error(error.message);
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="titulo">Título:</label>
      <input type="text" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />

      <label htmlFor="descripcion">Descripción:</label>
      <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

      <label htmlFor="destino">Destino:</label>
      <input type="text" id="destino" value={destino} onChange={(e) => setDestino(e.target.value)} required />

      <label htmlFor="fechaDeInicio">Fecha de inicio:</label>
      <input type="date" id="fechaDeInicio" value={fechaDeInicio} onChange={(e) => setFechaDeInicio(e.target.value)} required />

      <label htmlFor="fechaDeFin">Fecha de fin:</label>
      <input type="date" id="fechaDeFin" value={fechaDeFin} onChange={(e) => setFechaDeFin(e.target.value)} required />

      <label htmlFor="plazasMinimas">Plazas mínimas:</label>
      <input type="number" id="plazasMinimas" value={plazasMinimas} onChange={(e) => setPlazasMinimas(parseInt(e.target.value))} required />

      <label htmlFor="plazasMaximas">Plazas máximas:</label>
      <input type="number" id="plazasMaximas" value={plazasMaximas} onChange={(e) => setPlazasMaximas(parseInt(e.target.value))} required />

      <label htmlFor="ruta">Ruta:</label>
      <input type="text" id="ruta" value={ruta} onChange={(e) => setRuta(e.target.value)} required />

      <label htmlFor="precio">Precio:</label>
      <input type="number" id="precio" value={precio} onChange={(e) => setPrecio(parseInt(e.target.value))} required />

      <label htmlFor="activo">activo:</label>
      <input type="number" id="activo" value={activo} onChange={(e) => setActivo(parseInt(e.target.value))} required />

      <label htmlFor="confirmado">Confirmado:</label>
      <input type="number" id="confirmado" value={confirmado} onChange={(e) => setConfirmado(parseInt(e.target.value))} required />

      <input
      type='file'
      onChange={(e) => setPhoto(e.target.files)}
      accept='image/png, image/jpeg'
      required
  />

      <button type="submit">Enviar</button>
    </form>
  );
};

CreateUpdateTripForm.propTypes = {
  createTripService: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
};

export default CreateUpdateTripForm;
