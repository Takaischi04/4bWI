import React from 'react'
import Picture from '../atoms/Content_TeamPictureAtom.js'
import TeamName from '../atoms/Content_TeamNameAtom.js'

export default function TitleMolecules({ team }) {
  return (
    <div>
      TitleMolecule
      <Picture image={team.teamIconUrl} />
      <TeamName />
    </div>
  )
}
