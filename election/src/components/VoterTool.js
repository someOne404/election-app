import { ToolHeader } from "./ToolHeader";
import { ToolFooter } from "./ToolFooter";

import { VoterTableContainer } from "../containers/VoterTableContainer";


export const VoterTool = () => {
    return (
        <>
            <ToolHeader headerText="Voter Tool" />
            <VoterTableContainer />
            <ToolFooter companyName="A Cool Company, Inc." />
        </>
        
    );
};

VoterTool.defaultProps = {
};

VoterTool.propTypes = {
};