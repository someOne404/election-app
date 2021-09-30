import PropTypes from 'prop-types';
import { VoterForm } from "./VoterForm";
import { VoterViewRow } from "./VoterViewRow";
import { VoterEditRow } from "./VoterEditRow";

const dataCols = [
    { name: 'id', caption: 'Id' },
    { name: 'firstName', caption: 'First Name' },
    { name: 'lastName', caption: 'Last Name' },
    { name: 'address', caption: 'Address' },
    { name: 'city', caption: 'City' },
    { name: 'birthdate', caption: 'Birthdate' },
    { name: 'email', caption: 'Email' },
    { name: 'phone', caption: 'Phone' },
];

const sortArrowWrapper = (col, dir) => aCol => {
    if (col === aCol) {
      return dir === 'asc' ? 'v' : '^';
    } else {
      return '';
    }
};

const sortHeaderColWrapper = (sortVoters, sortArrow) => ({ col: { name, caption} }) => {
    return (
      <th>
        <button type="button" onClick={() => sortVoters(name)}>
          {caption} {sortArrow(name)}
        </button>
      </th>
    );
};

export const VoterTable = ({
    voters,
    showForm,
    editVoterId,
    errorMessage,
    votersSort: {col, dir},
    onSortVoters: sortVoters,
    onDeleteVoter: deleteVoter,
    appendVoter: onSubmitVoter,
    onEditVoter,
    onCancelVoter,
    onSaveVoter,
    toggleForm,
    deleteSelectedVoters,
}) => {

    const sortArrow = sortArrowWrapper(col, dir);

    sortArrow('id')

    const SortHeaderCol = sortHeaderColWrapper(sortVoters, sortArrowWrapper(col, dir));

    const votersToDelete = () => {
        const checkboxes = document.querySelectorAll('input[name="delete-voter"]:checked');
        let selectedVoterIds = [];
        checkboxes.forEach((checkbox) => {
            selectedVoterIds.push(checkbox.value);
        })
        return selectedVoterIds;
    };

    return (
        <>
        {errorMessage && <span>{errorMessage}</span>}
        <button type="button" onClick={toggleForm}>Register Voter</button>
        {showForm && <VoterForm onSubmitVoter={onSubmitVoter}/>}
        <table>
            <thead key='voter-thead'>
                <tr>
                    <th key='batch-delete-button'><button type="button" onClick={() => deleteSelectedVoters(votersToDelete())}>Delete Selected</button></th>
                    {dataCols.map(dataCol => <SortHeaderCol key={dataCol.name} col={dataCol} />)}
                    <th key="button-actions">Actions</th>
                </tr>
            </thead>
            <tbody>
                {voters.map((voter) =>
                voter.id === editVoterId 
                ? <VoterEditRow key={voter.id} voter={voter}
                    onSaveVoter={onSaveVoter} onCancelVoter={onCancelVoter} />
                : <VoterViewRow key={voter.id} voter={voter} 
                onDeleteVoter={deleteVoter} onEditVoter={onEditVoter} />)}
            </tbody>
        </table>
        </>
    );

};

VoterTable.defaultProps = {
    voter: [],
    votersSort: {
        col: 'id',
        dir: 'asc',
    },
}

VoterTable.propTypes = {
    votersSort: PropTypes.shape({
        col: PropTypes.oneOf(['id', 'firstName', 'lastName', 'address', 'city', 'birthdate', 'email', 'phone']).isRequired,
        dir: PropTypes.oneOf(['asc','desc']).isRequired,
    }).isRequired,
    onDeleteVoter: PropTypes.func.isRequired,
}