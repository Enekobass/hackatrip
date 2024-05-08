import { useState } from 'react';
import PropTypes from 'prop-types';

const CreateUpdateTripForm = ({ onSubmit }) => {
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
  const [imagen, setImagen] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    onSubmit({
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
      imagen
    });
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

      <label htmlFor="activo">Activo:</label>
      <select id="activo" value={activo} onChange={(e) => setActivo(e.target.value)} required>
        <option value="Si">Si</option>
        <option value="No">No</option>
      </select>

      <label htmlFor="confirmado">Confirmado:</label>
      <input type="number" id="confirmado" value={confirmado} onChange={(e) => setConfirmado(parseInt(e.target.value))} required />

      <label htmlFor="imagen">Imagen:</label>
      <input type="text" id="imagen" value={imagen} onChange={(e) => setImagen(e.target.value)} required />

      <button type="submit">Enviar</button>
    </form>
  );
};

CreateUpdateTripForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CreateUpdateTripForm;
