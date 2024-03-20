import React from 'react'
import { useState, useEffect } from 'react';
import { useSelectedTeam } from './CustomHookAtom.js';

export default function List_TeamNameAtom() {
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

  const neededIndex = (index) => {
    setSelectedTeamIndex(index);
    console.log("Index from List: " + index);
  }

  return (
    <div>
      {teams.map((team, index) => (
            <div key={index} className='w-full h-full hover:bg-gradient-to-b from-accentTurquoise to-accentPurple'>
                <button
                  onClick={() => neededIndex(index)}
                  key={index}
                  className={`w-widthOfList m-0.5 p-5 ${index % 2 === 0 ? "bg-listBackgroundDark" : "bg-listBackgroundLight"} cursor-pointer font-Quicksand text-2xl text-left text-white`}>
                    {team.teamName}
                </button>
            </div>
      ))}
    </div>
  );
}
