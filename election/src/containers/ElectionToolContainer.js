import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import {
  refreshElections,
  createViewElectionAction,
  appendElection,
  createAppendQuestionAction,
  createSetErrorMessageAction,
} from "../actions/electionToolActions";
import { ElectionTool } from '../components/ElectionTool';

export const ElectionToolContainer = () => {

  const elections = useSelector(state => state.elections);
  const viewElectionId = useSelector(s => s.viewElectionId);
  const questions = useSelector(s => s.questions);
  const errorMsg = useSelector(s => s.errorMsg);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onRefreshElections: refreshElections,
    onViewElection: createViewElectionAction,
    onSubmitElection: appendElection,
    onAppendQuestion: createAppendQuestionAction,
    onSetErrorMsg: createSetErrorMessageAction,
  }, dispatch), [dispatch]);

  useEffect(() => dispatch(refreshElections()), [dispatch]);

  return <ElectionTool elections={elections} viewElectionId={viewElectionId} 
    questions={questions} errorMsg={errorMsg}
    {...actions} />;
};