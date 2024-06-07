import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

import { promocionarACoordinador } from '../../services/userService';

const { VITE_API_URL } = import.meta.env;

const UsersList = ({ usuarios, authToken }) => {

    const navigate = useNavigate();

    const handleClick = async (userId) => {
        try {
          const confirm = await promocionarACoordinador(userId, authToken);
    
          toast.success(confirm);
    
          navigate('/');
        } catch (err) {
          toast.error(err.message);
        }
      };


    return (
        usuarios?.map((usuario, index) => (
            usuario.role === "normal" ?
            <>
            <div>
              <img className='imagen' src={usuario?.avatar ? `${VITE_API_URL}/${usuario?.avatar}` : '/default-avatar.jpg'} alt={usuario?.username} />
              <p>{usuario.username}</p>
              <p>{usuario.email}</p>
              <button onClick={() => handleClick(usuario.id)}>Promocionar a coordinador</button>
            </div>
          </>
          :
          <>
          <div>
            <img className='imagen' src={usuario?.avatar ? `${VITE_API_URL}/${usuario?.avatar}` : '/default-avatar.jpg'} alt={usuario?.username} />
            <p>{usuario.username}</p>
            <p>{usuario.email}</p>
            <p>Este usuario ya es coordinador o admin</p>
          </div>
        </>
        ))
      );
};

export default UsersList;
