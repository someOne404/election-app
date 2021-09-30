import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import { VoterTable } from "../components/VoterTable";

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";

import { 
    refreshVoters,
    appendVoter,
    removeVoter,
    createSortVotersAction,
    createToggleFormAction,
    createEditVoterAction,
    createCancelVoterAction,
} from "../actions/voterToolActions";

const sortedVotersSelector = sortedItemsSelector("voters", "votersSort");

export const VoterTableContainer = () => {

    const voters = useSelector(sortedVotersSelector);
    const votersSort = useSelector(s => s.votersSort);
    const showForm = useSelector(s => s.showForm);
    const editVoterId = useSelector(s => s.editVoterId);

    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
        onSortVoters: createSortVotersAction,
        appendVoter: appendVoter,
        onDeleteVoter: removeVoter,
        toggleForm: createToggleFormAction,
        onCancelVoter: createCancelVoterAction,
        onEditVoter: createEditVoterAction,
    }, dispatch), [dispatch]);

    useEffect(() => dispatch(refreshVoters()), [dispatch]);  

    return <VoterTable voters={voters} votersSort={votersSort} 
                       showForm={showForm} editVoterId={editVoterId} {...actions} />;
}

