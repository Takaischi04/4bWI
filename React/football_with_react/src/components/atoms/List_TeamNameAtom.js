import React from 'react'
import { useState, useEffect } from 'react';
import TeamCard from './List_TeamCard.js';

export default function List_TeamNameAtom({ onSelect }) {
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
      res.json().then((data) => {
        setTeams(data);
      })
    );
  }, []);



  const neededIndex = (team) => {
    onSelect(team);
  }


  return (
    <div className="overflow-auto">
      {teams.map((team, index) => (
        <TeamCard name={team.teamName} index={index} onClick={() => neededIndex(team)} />
      ))}
    </div>
  );
}
