export const BallotPage = ({ elections }) => {
  return (
    <>
      <ul className="list-group">{elections.map(({ id, name }) =>
        <li className="list-group-item" key={id}>
          {id} - {name}
          <button type="button" className="mx-3" onClick={() => { }}>Vote</button>
        </li>)}
      </ul>
    </>
  );
}