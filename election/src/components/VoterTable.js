// import PropTypes from 'prop-types';


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
    votersSort: {col, dir},
    onSortVoters: sortVoters,
}) => {

    const sortArrow = sortArrowWrapper(col, dir);

    sortArrow('id')

    const SortHeaderCol = sortHeaderColWrapper(sortVoters, sortArrowWrapper(col, dir));

    return (
        <>
        <button type="button">Register Voter</button>
        <table>
            <thead>
                <tr>
                    {dataCols.map(dataCol => <SortHeaderCol key={dataCol.id} col={dataCol} />)}
                </tr>
            </thead>
            <tbody>
                {voters.map((voter) =>
                    <tr>
                        <td>{voter.id}</td>
                        <td>{voter.firstName}</td>
                        <td>{voter.lastName}</td>
                        <td>{voter.address}</td>
                        <td>{voter.city}</td>
                        <td>{voter.birthdate}</td>
                        <td>{voter.email}</td>
                        <td>{voter.phone}</td>
                    </tr>
                )};
            </tbody>
        </table>
        </>
    );

};

VoterTable.defaultProps = {
    voter: [],
}

// TODO: ADD PROPTYPES