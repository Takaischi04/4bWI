import React from 'react';
import Card from './Card.js';

export default function PeopleContainer() {
    return (
        <div>
            <h1>People</h1>
            <div>
                <Card name="Hans" title="CEO" imageUrl="https://fastly.picsum.photos/id/208/200/300.jpg?hmac=MnC8s7YHdlG81eGO_ZmX1VbjLAYw-jIYEe74kkfvuwc" />
            </div>
        </div>
    )
}
