import Content from './components/organisms/Content_Organism.js'
import List_TeamNameAtom from './components/atoms/List_TeamNameAtom.js';
import { useState } from 'react';

function App() {
  const [team, setTeam] = useState(null);
  const [infoId, setInfoId] = useState(6);
  const [previousTeam, setPreviousTeam] = useState(null);
  const [comingTeam, setComingTeam] = useState(null);

  return (
    <div className="h-screen w-screen bg-black flex">
      <List_TeamNameAtom infoId={infoId} onSelect={(team, previousTeam, comingTeam, infoId) => {
        console.log("main", team);
        setTeam(team);
        setPreviousTeam(previousTeam);
        setComingTeam(comingTeam);
        setInfoId(team.teamInfoId);
      }} />

      {team ?
        <Content team={team} previousTeam={previousTeam} comingTeam={comingTeam} /> : <div className="m-10 bg-backgroundContent w-contentWidth font-Quicksand text-white">Bitte wähle ein Team</div>}
    </div>
  );
}

export default App;
