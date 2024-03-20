import React from 'react'
import TitleMolecule from '../molecules/Content_TitleMolecule.js'
{/*
import StatsMolecule from '../molecules/Content_StatsMolecule.js'
import ComingMatchesMolecule from '../molecules/Content_ComingMatchesMolecule.js'
*/}

export default function Content_Organism() {
  return (
    <div className="m-10 bg-backgroundContent w-contentWidth font-Quicksand text-white">
      <TitleMolecule />
      {/*
      <StatsMolecule />
      <ComingMatchesMolecule />
      */}
    </div>
  )
}
