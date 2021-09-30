export const BallotPage = ({elections}) => {
    return (
        <>
        <ul>{elections.map(({ id, name }) =>
        <li key={id}>
          {id} - {name}
          <button type="button" onClick={() => {} }>Vote</button>
        </li>)}
      </ul>
      </>
    );
}