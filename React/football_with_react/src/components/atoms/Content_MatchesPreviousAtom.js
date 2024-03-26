import React from 'react'

export default function Content_MatchesPreviousAtom({ previousTeam }) {
    return (
        <div className="flex justify-center">
            <img className="h-28 w-28 m-10" src={previousTeam.team1.teamIconUrl} />
            <h2 className="text-5xl self-center">vs</h2>
            <img className="h-28 w-28 m-10" src={previousTeam.team2.teamIconUrl} />
        </div >
    )
}
