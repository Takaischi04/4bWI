import React from 'react'
import TitleMolecule from '../molecules/Content_TitleMolecule.js'
import StatsMolecule from '../molecules/Content_StatsMolecule.js'
import MatchesMolecule from '../molecules/Content_MatchesMolecule.js'
import { useState, useEffect } from 'react';

export default function Content_Organism({ team }) {
  const [previousTeam, setPreviousTeam] = useState([]);
  const [comingTeam, setComingTeam] = useState([]);

  useEffect(() => {
    fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4608/${team.teamInfoId}`).then((res1) =>
      res1.json().then((data1) => {
        setPreviousTeam(data1);
      })
    );
  }, [team.teamInfoId]);

  useEffect(() => {
    fetch(`https://api.openligadb.de/getlastmatchbyleagueteam/4608/${team.teamInfoId}`).then((res2) =>
      res2.json().then((data2) => {
        setComingTeam(data2);
      })
    );
  }, [team.teamInfoId]);

  return (
    <div className="m-10 bg-backgroundContent w-contentWidth font-Quicksand text-white">
      <div className="flex">
        <TitleMolecule team={team} />
        <StatsMolecule team={team} />
      </div>
      <MatchesMolecule previousTeam={previousTeam} comingTeam={comingTeam} />
    </div>
  )
}
