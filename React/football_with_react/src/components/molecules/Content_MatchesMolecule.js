import React from 'react'
import PreviousMatch from '../atoms/Content_MatchesPreviousAtom'
import UpcomingMatch from '../atoms/Content_MatchesUpcomingAtom'

export default function Content_ComingMatchesMolecule({ previousTeam, comingTeam }) {

  return (
    <div className="flex pt-10 justify-evenly">

      <div>
        <h1 className="text-4xl p">Previous Match</h1>
        <div className="bg-gradient-to-b from-accentTurquoise to-accentPurple p-0.5 h-48 w-96">
          <div className="bg-backgroundContent h-full">
            <PreviousMatch previousTeam={previousTeam} />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-4xl p">Upcoming Matches</h1>
        <div className="bg-gradient-to-b from-accentTurquoise to-accentPurple p-0.5 h-48 w-96">
          <div className="bg-backgroundContent h-full">
            <UpcomingMatch comingTeam={comingTeam} />
          </div>
        </div>
      </div>

    </div>
  )
}
