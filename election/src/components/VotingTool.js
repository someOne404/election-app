import { ToolHeader } from "./ToolHeader";
import { ToolFooter } from "./ToolFooter";

import { VotingToolContainer } from "../containers/VotingToolContainer";


export const VotingTool = () => {
    return (
        <>
            <ToolHeader headerText="Voting Tool" />
            <VotingToolContainer />
            <ToolFooter companyName="A Cool Company, Inc." />
        </>
        
    );
};

VotingTool.defaultProps = {
};

VotingTool.propTypes = {
};