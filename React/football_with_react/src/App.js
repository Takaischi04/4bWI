import Content from './components/organisms/Content_Organism.js'
import List_TeamNameAtom from './components/atoms/List_TeamNameAtom.js';
import { useState } from 'react';

function App() {
  const [team, setTeam] = useState(null);

  return (
    <div className="h-screen w-screen bg-black flex">
      <List_TeamNameAtom onSelect={(team) => {
        console.log("main", team);
        setTeam(team);
      }} />
      {team ?
        <Content team={team} /> : <div className="m-10 bg-backgroundContent w-contentWidth font-Quicksand text-white">Bitte wähle ein Team</div>}
    </div>
  );
}

export default App;
