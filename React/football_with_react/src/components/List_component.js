import React, { useEffect, useState } from 'react';

export default function List_component() {
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
        <div className="w-80 h-full text-white bg-backgroundList overflow-auto">
            {teams.map((team, index) => (
                <div className="w-full h-24 hover:bg-gradient-to-b from-accentTurquoise to-accentPurple flex">
                    <button
                        key={index}
                        className={`w-full m-1 pl-5 ${index % 2 === 0 ? "bg-listBackgroundDark" : "bg-listBackgroundLight"} cursor-pointer font-Quicksand text-2xl text-left `}>

                        {team.teamName}
                    </button>
                </div>
            ))}
        </div>
    )
}
