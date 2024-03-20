import React from 'react'
import Picture from '../atoms/Content_TeamPictureAtom.js'
import TeamName from '../atoms/Content_TeamNameAtom.js'

export default function TitleMolecules({ team }) {
  return (
    <div className="m-10 w-64">
      <Picture image={team.teamIconUrl} />
      <TeamName name={team.teamName} />
    </div>
  )
}
