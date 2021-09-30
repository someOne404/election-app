import { useState } from 'react';

import { useList } from './useList';

export const useElectionTool = (initialElections) =>  {

  const [
    elections,
    appendElection, , , , 
  ] = useList([ ...initialElections ]);

  const [ viewElectionId, setViewElectionId ] = useState(-1);

  const viewElection = electionId => setViewElectionId(electionId);

  const cancelView = () => setViewElectionId(-1);
  
  return {
    elections,
    viewElectionId,
    appendElection,
    viewElection,
    cancelView,
  };

};