import PropTypes from 'prop-types';

import { voterPropType } from '../prop-types/voters';

export const VoterViewRow = ({ voter, onEditVoter: editVoter, onDeleteVoter: deleteVoter}) => {

    return (
    <tr>
        <td class="checkbox"><input type="checkbox" value={voter.id} name="delete-voter"/></td>
        <td>{voter.id}</td>
        <td>{voter.firstName}</td>
        <td>{voter.lastName}</td>
        <td>{voter.address}</td>
        <td>{voter.city}</td>
        <td>{voter.birthdate}</td>
        <td>{voter.email}</td>
        <td>{voter.phone}</td>
        <td>
            <button type="button" onClick={() => editVoter(voter.id)}>Edit</button>
            <button type="button" onClick={() => deleteVoter(voter.id)}>Delete</button>
        </td>
    </tr>
    );
};


VoterViewRow.propTypes = {
    voter: voterPropType.isRequired,
    onDeleteVoter: PropTypes.func.isRequired,
    onEditVoter: PropTypes.func.isRequired,
};