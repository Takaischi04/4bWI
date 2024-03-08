import React, { useEffect, useState } from 'react';


export default function StatsMolecule() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then((res) => res.json()
                .then((data) => {
                    setTeams(data);
                })
            );
    }, [])


    return (
        <div className="w-4/12 h-1/3 p-0.5 bg-gradient-to-b from-accentTurquoise to-accentPurple">
            <div className="w-full h-full bg-backgroundContent font-Quicksand">
                <h1>Stats</h1>
                {teams.map((team) => (
                    <img className="w-52 h-52" src={team.teamIconUrl} />
                ))}
            </div>
        </div>
    )
}