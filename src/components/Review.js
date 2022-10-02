import React from 'react';

export function Review ({name, location, reviewText }) {
  return (
    <div className="reviewItem">
        <h2>{name}</h2>
        <h3>{location}</h3>
        <p>{reviewText}</p>
    </div>
  );
}

