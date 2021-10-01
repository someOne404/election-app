import { ToolHeader } from "./ToolHeader";

import { VoterTableContainer } from "../containers/VoterTableContainer";


export const VoterTool = () => {
    return (
        <>
            <ToolHeader headerText="Voter Tool" />
            <VoterTableContainer />
        </>
        
    );
};

VoterTool.defaultProps = {
};

VoterTool.propTypes = {
};