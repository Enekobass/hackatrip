import './HomePage.css';

const HomePage = () => {
  return (
    <main>
      <div className='botonesHome'>
        <button className='botonDonde'>¿Donde quieres ir?</button>
        <button className='botonCuando'>¿Cuando quieres salir?</button>
      </div>

      <h2 className='textoIdeas'>TE DAMOS IDEAS:</h2>
      <div className='ideas'>
        <button className='botonFoto'>Viaje 1</button>
        <button className='botonFoto'>Viaje 2</button>
        <button className='botonFoto'>Viaje 3</button>
        <button className='botonFoto'>Viaje 4</button>
        <button className='botonFoto'>Viaje 5</button>
        <button className='botonFoto'>Viaje 6</button>
      </div>
    </main>
  );
};

export default HomePage;
