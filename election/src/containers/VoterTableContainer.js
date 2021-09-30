import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import { VoterTable } from "../components/VoterTable";

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";

import { 
    refreshVoters,
    appendVoter,
    removeVoter,
    replaceVoter,
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
    const errorMessage = useSelector(s => s.errorMessage);

    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
        onSortVoters: createSortVotersAction,
        appendVoter: appendVoter,
        removeVoter: removeVoter,
        toggleForm: createToggleFormAction,
        onCancelVoter: createCancelVoterAction,
        onEditVoter: createEditVoterAction,
        onSaveVoter: replaceVoter,
    }, dispatch), [dispatch]);

    useEffect(() => dispatch(refreshVoters()), [dispatch]);  

    return <VoterTable voters={voters} votersSort={votersSort} errorMessage={errorMessage}
                       showForm={showForm} editVoterId={editVoterId} {...actions} />;
}

