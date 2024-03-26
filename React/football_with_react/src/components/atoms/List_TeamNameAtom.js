import React from 'react'
import { useState, useEffect } from 'react';
import TeamCard from './List_TeamCard.js';

export default function List_TeamNameAtom({ onSelect, infoId }) {
  const [teams, setTeams] = useState([]);
  const [previousTeam, setPreviousTeam] = useState([]);
  const [comingTeam, setComingTeam] = useState([]);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res) =>
      res.json().then((data) => {
        setTeams(data);
      })
    );
  }, []);

  useEffect(() => {
    fetch(`https://api.openligadb.de/getnextmatchbyleagueteam/4608/${infoId}`).then((res1) =>
      res1.json().then((data1) => {
        setPreviousTeam(data1);
      })
    );
  }, [infoId]);

  useEffect(() => {
    fetch(`https://api.openligadb.de/getlastmatchbyleagueteam/4608/${infoId}`).then((res2) =>
      res2.json().then((data2) => {
        setComingTeam(data2);
      })
    );
  }, [infoId]);

  const neededIndex = (team, previousTeam, comingTeam, infoId) => {
    onSelect(team, previousTeam, comingTeam, infoId);
  }


  return (
    <div className="overflow-auto">
      {teams.map((team, index) => (
        <TeamCard name={team.teamName} index={index} onClick={() => neededIndex(team, previousTeam, comingTeam, infoId)} />
      ))}
    </div>
  );
}
