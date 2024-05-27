import PropType from 'prop-types';

import toast from 'react-hot-toast';

import Stars from '../../components/Stars/Stars';

const AddVoteForm = ({
    insertTripVoteService,
    addTripVote,
    tripId,
    coordinador,
    avgValue,
    authUser,
    authToken,
}) => {

    const handleAddVote = async (vote) => {
        try {
            if (authUser) {
                const newVotesAvg = await insertTripVoteService(
                    vote,
                    tripId,
                    authToken
                );
                
                addTripVote(newVotesAvg.votes);

                toast.success(newVotesAvg.message);
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div>
            {coordinador && (
                <>
                    <div>¡Vota al coordinador de este viaje si has participado en él!</div>
                    <div>
                        <img src={coordinador?.avatar ? coordinador.avatar : '/default-avatar.jpg'} alt={coordinador?.username} />
                        <p>{coordinador?.username}</p>
                    </div>
                    <div className='stars-vote'>
                        <Stars votesAvg={avgValue?.media} votedByMe={avgValue?.votedByMe} handleAddVote={handleAddVote} />
                        <span>{avgValue?.media} estrellas</span>
                    </div>
                </>
            )}
        </div>
    );
};

AddVoteForm.propTypes = {
    insertTripVoteService: PropType.func.isRequired,
    addTripVote: PropType.func.isRequired,
    votes: PropType.string,
    tripId: PropType.string.isRequired,
    coordinador: PropType.object,
    avgValue: PropType.object,
    authUser: PropType.object,
    authToken: PropType.string,
};

export default AddVoteForm;
