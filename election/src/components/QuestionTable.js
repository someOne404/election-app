
import { electionPropType } from '../prop-types/elections';

export const QuestionTable = ({
  election,
 }) => {

  return (
    <>
      <h3>{election.name}</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Question</th>
            <th>YesCount</th> 
            <th>NoCount</th>
          </tr>
        </thead>
        <tbody>
          {election.questions.map(({ id, question, yesCount }) =><tr key={id}>
            <td>{id}</td>
            <td>{question}</td>
            <td>{yesCount}</td>
            <td>{election.voterIds.length - yesCount}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
};

QuestionTable.defaultProps = {
  election: {},
};

QuestionTable.propsTypes = {
  election: electionPropType.isRequired,
};