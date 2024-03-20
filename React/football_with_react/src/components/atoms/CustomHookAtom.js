import { useState, useEffect } from 'react';

export function useSelectedTeam(selectedTeamIndex) {
  const [singleTeam, setSingleTeam] = useState(null);

  useEffect(() => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((res1) =>
      res1.json().then((singleTeamData) => {
        const selectedTeam = singleTeamData[selectedTeamIndex];
        setSingleTeam(selectedTeam);
        console.log(selectedTeam);
      })
    );
  }, [selectedTeamIndex]);

  return singleTeam;
}
