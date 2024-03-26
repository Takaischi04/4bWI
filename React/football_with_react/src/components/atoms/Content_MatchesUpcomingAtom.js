import React from 'react'

export default function Content_MatchesUpcomingAtom({ comingTeam }) {
    return (
        <div className="flex justify-center">
            <img className="h-28 w-28 m-10" src={comingTeam.team2.teamIconUrl} />
            <h2 className="text-5xl self-center">vs</h2>
            <img className="h-28 w-28 m-10" src={comingTeam.team1.teamIconUrl} />
        </div >
    )
}
