import React from 'react'
import TitleMolecule from '../molecules/Content_TitleMolecule.js'
import StatsMolecule from '../molecules/Content_StatsMolecule.js'
import MatchesMolecule from '../molecules/Content_MatchesMolecule.js'

export default function Content_Organism({ team, previousTeam, comingTeam }) {

  return (
    <div className="m-10 bg-backgroundContent w-contentWidth font-Quicksand text-white">
      <div className="flex">
        <TitleMolecule team={team} />
        <StatsMolecule team={team} />
      </div>
      <MatchesMolecule team={team} previousTeam={previousTeam} comingTeam={comingTeam} />
    </div>
  )
}
