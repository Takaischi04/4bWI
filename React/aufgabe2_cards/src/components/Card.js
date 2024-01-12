import React from 'react';

export default function Card({ name, title, imageUrl }) {
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <h1>{title}</h1>
      </div>
      <div>
        <img src={imageUrl} alt=''></img>
      </div>
    </div>
  )
}
