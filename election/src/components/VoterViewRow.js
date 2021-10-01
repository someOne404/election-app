import PropTypes from 'prop-types';
import { voterPropType } from '../prop-types/voters';

export const VoterViewRow = ({ voter, checkedVoterIds,
    onEditVoter: editVoter, onDeleteVoter: deleteVoter, setCheckedVoterIds,
}) => {

    const updateCheck = (e) => {
        console.log(e.target.checked);
        if(e.target.checked) {
            setCheckedVoterIds([...checkedVoterIds, voter.id]);
        } else {
            setCheckedVoterIds(checkedVoterIds.filter(id => id !== voter.id));
        }
    }
    return (
    <tr>
        <td className="checkbox"><input type="checkbox" value={voter.id} 
            name="delete-voter" onChange={updateCheck}/></td>
        <td>{voter.id}</td>
        <td>{voter.firstName}</td>
        <td>{voter.lastName}</td>
        <td>{voter.address}</td>
        <td>{voter.city}</td>
        <td>{voter.birthdate}</td>
        <td>{voter.email}</td>
        <td>{voter.phone}</td>
        <td>
            <button type="button" className="mx-1" onClick={() => editVoter(voter.id)}>Edit</button>
            <button type="button" className="mx-1" onClick={() => deleteVoter(voter.id)}>Delete</button>
        </td>
    </tr>
    );
};


VoterViewRow.propTypes = {
    voter: voterPropType.isRequired,
    onDeleteVoter: PropTypes.func.isRequired,
    onEditVoter: PropTypes.func.isRequired,
};