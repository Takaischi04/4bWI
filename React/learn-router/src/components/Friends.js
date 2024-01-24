import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Friends() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Friends</h1>
            <Link to="/">People</Link>

            <div
                onClick={() => {
                    navigate("/")
                }}
            >
                go to People
            </div>
        </div>
    )
}
