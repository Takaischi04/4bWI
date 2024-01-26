import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Friends() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state);
    return (
        <div>
            <h1>Friends</h1>
            <Link to="/Friends" state={{ name: "Hans", age: 17 }}>
                People
            </Link>

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
