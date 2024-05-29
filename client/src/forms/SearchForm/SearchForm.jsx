import PropType from 'prop-types';

import { useState } from 'react';

import './SearchForm.css';

import Select from "react-select"

const SearchForm = ({ setSearchParams, loading, setTripsFiltrados }) => {


    const [destino, setDestino] = useState('');
    const [grupoDeEdad, setGrupoDeEdad] = useState('');
    //const [fecha, setFecha] = useState('');

    //En esta array, añadir cuando se crea un viaje con un nuevo destino que no habia existido antes en la web
    const destinos = [
        { value: 'costa rica', label: 'Costa Rica' },
        { value: 'estados unidos', label: 'Estados Unidos' },
        { value: 'francia', label: 'Francia' },
        { value: 'indonesia', label: 'Indonesia' },
        { value: 'italia', label: 'Italia' },
        { value: 'japon', label: 'Japón' },
        { value: 'kenia', label: 'Kenia' },
        { value: 'laos', label: 'Laos' },
        { value: 'marruecos', label: 'Marruecos' },
        { value: 'mexico', label: 'México' },
        { value: 'peru', label: 'Perú' },
        { value: 'portugal', label: 'Portugal' },
        { value: 'tailandia', label: 'Tailandia' },
      ];

      const grupos = [
        { value: '25-35', label: '25-35' },
        { value: '36-45', label: '36-45' },
      ];

    const handleChange1 = (selectedOption) => {
        setDestino(selectedOption.value)
    }

    const handleChange2 = (selectedOption) => {
        setGrupoDeEdad(selectedOption.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTripsFiltrados(true);

        setSearchParams(
            new URLSearchParams({
                destino,
                grupoDeEdad
            })
        );
    };

    return (
        <form onSubmit={handleSubmit} className='botonesHome'>
            <Select placeholder="Busca un destino al que dirigirte" className='botonDonde' options={destinos} onChange={handleChange1} />

            <Select placeholder="Grupo de edad" className='botonDonde' options={grupos} onChange={handleChange2} />

            {/* <div className='botonCuando'>
                <label htmlFor='fecha'>¿Cuando quieres salir?</label>
                <input
                    type='date'
                    id='fecha'
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div> */}

            <button disabled={loading}>Buscar</button>
        </form>
    );
};

SearchForm.propTypes = {
    setSearchParams: PropType.func.isRequired,
    loading: PropType.bool.isRequired,
    setTripsFiltrados: PropType.func.isRequired,
};

export default SearchForm;
