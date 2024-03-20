import React from 'react'
import { useState, useEffect } from 'react';
import { useSelectedTeam } from './CustomHookAtom.js';
import TeamCard from './TeamCard.js';

export default function List_TeamNameAtom({ onSelect }) {
  const [teams, setTeams] = useState([]);
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
      res.json().then((data) => {
        setTeams(data);
      })
    );
  }, []);

  const selectedTeam = useSelectedTeam(selectedTeamIndex);

  const neededIndex = (team) => {
    onSelect(team);
    // setSelectedTeamIndex(index);
    // console.log("Index from List: " + index);
  }


  return (
    <div>
      {teams.map((team, index) => (
        <TeamCard name={team.teamName} index={index} onClick={() => neededIndex(team)} />
      ))}
    </div>
  );
}
