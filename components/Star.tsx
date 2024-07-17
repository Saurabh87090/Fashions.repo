import React from 'react';

function Star({ star }: { star: number }) {
  return (
    <div className='flex space-x-1'>
      {Array.from({ length: star }, (_, index) => (
        <img
          key={index}
          src="/star.svg" // replace with the path to your star image
          alt="star"
          className="star-image" // optional: add a class for styling
        />
      ))}
    </div>
  );
}

export default Star;
