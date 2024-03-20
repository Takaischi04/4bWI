import React from 'react'

export default function TeamCard({ index, name, onClick }) {
    return (
        <div key={index} className='w-full hover:bg-gradient-to-b from-accentTurquoise to-accentPurple'>
            <button
                onClick={() => onClick()}
                key={index}
                className={`w-widthOfList m-0.5 p-5 ${index % 2 === 0 ? "bg-listBackgroundDark" : "bg-listBackgroundLight"} cursor-pointer font-Quicksand text-2xl text-left text-white`}>
                {name}
            </button>
        </div>
    )
}
