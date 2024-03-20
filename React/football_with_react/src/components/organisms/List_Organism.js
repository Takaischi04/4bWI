import React from 'react'
import TeamMolecule from '../molecules/List_Molecule.js';

export default function ListTemplate() {
  return (
    <div className="w-1/5 h-full bg-backgroundList overflow-auto">
        <TeamMolecule />
    </div>
  )
}
