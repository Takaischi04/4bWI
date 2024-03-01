import React from 'react'
import { useEffect, useState } from 'react';

export default function ListButtonMolecule() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then((res) => res.json()
                .then((data) => {
                    console.log(data);
                    setTeams(data);
                })
            );
    }, [])

    return (
        <div>
            {teams.map((team, index) => (
                <div className='w-full h-full hover:bg-gradient-to-b from-accentTurquoise to-accentPurple'>
                    <button
                        key={index}
                        className={`w-widthOfList m-0.5 p-5 ${index % 2 === 0 ? "bg-listBackgroundDark" : "bg-listBackgroundLight"} cursor-pointer font-Quicksand text-2xl text-left`}>
                        {team.teamName}
                    </button>
                </div>
            ))}
        </div>
    )
}
