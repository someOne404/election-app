import { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VotingPage } from "../components/VotingPage";
import { bindActionCreators } from "redux";
import { refreshElections, startVotingAction } from "../actions/votingToolActions";

export const VotingToolContainer = () => {
    const elections = useSelector(s => s.elections);
    
    const dispatch = useDispatch();
    
    const actions = useMemo(() => bindActionCreators({
        startVoting: startVotingAction,
    }, dispatch), [dispatch]);
    
    useEffect(() => dispatch(refreshElections()), [dispatch]);  
    
    return (
        <VotingPage elections={elections}/>
    );
};

