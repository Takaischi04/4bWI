import React from 'react'



export default function Content_StatsMolecule({ team }) {
  return (
    <div className="mt-5 ml-80">
      <h1 className="m-3 text-4xl text-center ">Stats</h1>
      <div className="w-96 h-72 p-0.5 bg-gradient-to-b from-accentTurquoise to-accentPurple flex">
        <div className="h-full w-full bg-backgroundContent text-2xl text-left pl-32">
          <p className="pt-8">Matches: {team.matches}</p>
          <p className="pt-8">Wins: {team.won}</p>
          <p className="pt-8">Losses: {team.lost}</p>
          <p className="pt-8">Draws: {team.draw}</p>
        </div>
      </div>
    </div>
  )
}
