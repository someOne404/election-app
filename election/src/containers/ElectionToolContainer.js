import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import {
  refreshElections,
  createViewElectionAction,
  appendElection,
} from "../actions/electionToolActions";
import { ElectionTool } from '../components/ElectionTool';

export const ElectionToolContainer = () => {

  const elections = useSelector(state => state.elections);
  const viewElectionId = useSelector(s => s.viewElectionId);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onRefreshElections: refreshElections,
    onViewElection: createViewElectionAction,
    onSubmitElection: appendElection,
  }, dispatch), [dispatch]);

  useEffect(() => dispatch(refreshElections()), [dispatch]);

  return <ElectionTool elections={elections} viewElectionId={viewElectionId} {...actions} />;
};