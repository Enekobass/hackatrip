import PropType from 'prop-types';

import { useState } from 'react';

import './SearchForm.css';

const SearchForm = ({ setSearchParams, loading, setTripsFiltrados }) => {
    const [destino, setDestino] = useState('');
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setTripsFiltrados(true);

        setSearchParams(
            new URLSearchParams({
                destino,
                fecha,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit} className='botonesHome'>
            <div className='botonDonde'>
                <label htmlFor='destino'>¿A donde quieres ir?</label>
                <input
                    type='text'
                    id='destino'
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                />
            </div>

            <div className='botonCuando'>
                <label htmlFor='fecha'>¿Cuando quieres salir?</label>
                <input
                    type='text'
                    id='fecha'
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />
            </div>

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
