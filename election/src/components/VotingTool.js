import { ToolHeader } from "./ToolHeader";

import { VotingToolContainer } from "../containers/VotingToolContainer";


export const VotingTool = () => {
    return (
        <>
            <ToolHeader headerText="Voting Tool" />
            <VotingToolContainer />
        </>
        
    );
};

VotingTool.defaultProps = {
};

VotingTool.propTypes = {
};