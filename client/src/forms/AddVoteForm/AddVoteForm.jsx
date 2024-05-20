import PropType from 'prop-types';

import { useState } from 'react';

import toast from 'react-hot-toast';

import Stars from '../../components/Stars/Stars';

const AddVoteForm = ({
    insertTripVoteService,
    addTripVote,
    votes,
    tripId,
    coordinador,
    authUser,
    authToken,
}) => {
    console.log(coordinador);
    const [votesAvg, setVotesAvg] = useState(votes);

    const handleAddVote = async (vote) => {
        try {
            if (authUser) {
                const newVotesAvg = await insertTripVoteService(
                    vote,
                    tripId,
                    authToken
                );
                
                addTripVote(newVotesAvg.votes);

                setVotesAvg(newVotesAvg.votes);

                toast.success(newVotesAvg.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <main>
            {coordinador && (
                <>
                    <div>¡Vota al coordinador de este viaje si has participado en él!</div>
                    <div>
                        <img src={coordinador?.avatar ? coordinador.avatar : '/default-avatar.jpg'} alt={coordinador?.username} />
                        <p>{coordinador?.username}</p>
                    </div>
                    <div className='stars-vote'>
                        <Stars votesAvg={votesAvg} handleAddVote={handleAddVote} />
                        <span>{votes} estrellas</span>
                    </div>
                </>
            )}
        </main>
    );
};

AddVoteForm.propTypes = {
    insertTripVoteService: PropType.func.isRequired,
    addTripVote: PropType.func.isRequired,
    votes: PropType.string,
    tripId: PropType.string.isRequired,
    coordinador: PropType.object,
    authUser: PropType.object.isRequired,
    authToken: PropType.string.isRequired,
};

export default AddVoteForm;
