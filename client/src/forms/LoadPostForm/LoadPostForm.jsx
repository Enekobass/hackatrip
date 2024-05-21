import { useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { LoadPostService } from '../../services/tripService.js';
import { AuthContext } from '../../contexts/AuthContext';

const LoadPostForm = () => {

  const { authToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const [title, setTitulo] = useState('');

  const [descripcion, setDescripcion] = useState('');

  const [photo, setPhoto] = useState('');

  const [value, setValue] = useState('');

  const params = useParams();

  const viajeId = params.viajeId;

  const handleSubmit = async (e) => {
    try{
    e.preventDefault();

    // Llama a la función onSubmit pasando los datos del formulario
    const message = await LoadPostService(
      title,
      descripcion,
      photo,
      value,
      viajeId,
      authToken,
  );

  toast.success(message);
   navigate(`/trippage/${viajeId}`);
  } catch(error){
    toast.error(error.message);
  }
};


  return (
    <div className='create-update-trip-form-container'>
    <form onSubmit={handleSubmit}>
    <div className='create-update-trip-form'>
      <label htmlFor="tittle">Título:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitulo(e.target.value)} required />

      <label htmlFor="descripcion">Descripción:</label>
      <textarea id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />

      <label htmlFor="descripcion">Nota del viaje (1-5):</label>
      <textarea id="descripcion" value={value} onChange={(e) => setValue(e.target.value)} required />

      <label htmlFor="Imagen">Portada del viaje:</label>
      <input
      type='file'
      onChange={(e) => setPhoto(e.target.files)}
      accept='image/png, image/jpeg'
      required
  />
  </div>
      <button className='boton-admin' type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default LoadPostForm;