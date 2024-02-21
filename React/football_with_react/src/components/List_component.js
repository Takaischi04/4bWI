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
                <button
                    key={index}
                    className={`w-full h-24 pl-5 cursor-pointer bg-${index % 2 === 0 ? "listBackgroundDark" : "listBackgroundLight"} font-Quicksand text-2xl text-left`}>
                    {team.teamName}
                </button>
            ))}
        </div>
    )
}
