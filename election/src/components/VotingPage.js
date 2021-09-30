import { VerifyVoterPage } from "./VerifyVoterPage";
import { BallotPage } from "./BallotPage";

export const VotingPage = ({elections}) => {
    return (
        <>
            <BallotPage elections={elections}/> 
            <VerifyVoterPage />
        </>
    );
}