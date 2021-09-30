import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import { VoterTable } from "../components/VoterTable";

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";

import { 
    refreshVoters,
    createSortVotersAction,
} from "../actions/voterToolActions";

const sortedVotersSelector = sortedItemsSelector("voters", "votersSort");

export const VoterTableContainer = () => {

    const voters = useSelector(sortedVotersSelector);
    const votersSort = useSelector(s => s.votersSort);

    const dispatch = useDispatch();

    const actions = useMemo(() => bindActionCreators({
        onSortVoters: createSortVotersAction,
    }, dispatch), [dispatch]);

    useEffect(() => dispatch(refreshVoters()), [dispatch]);  

    return <VoterTable voters={voters} votersSort={votersSort} {...actions} />;
}

