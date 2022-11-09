import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className="card" key={planet.id}>
      <h3>{ planet.name }</h3>
      <p>Population - { planet.population }</p>
      <p>Terrain - { planet.terrain }</p>
    </div>
  );
}
 
export default Planet;