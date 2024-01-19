import React, { useEffect, useState } from 'react';
import Card from './Card.js';

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);

    useEffect(() => {
        fetch("https://65a7a5c594c2c5762da72eb2.mockapi.io/Person").then(
            (res) => res.json().then((data) => {
                setPeople(data);
                setFilteredPeople(data);
            })
        );
    }, [])

    const filterPeople = (filter) => {
        let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
        setFilteredPeople(filtered);
    }

    return (
        <div className="">
            <div className="fixed mb-4 -full h-28 p-8">
                <input className="border p-4" type="Text" placeholder="Search" onChange={(el) => {
                    console.log(el.target.value);
                    filterPeople(el.target.value);
                }} />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap p-8 pt-32">
                {filteredPeople.map(person => {
                    return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle} />
                })}
            </div>
        </div>
    )
}
