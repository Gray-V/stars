// src/components/ClassSelector.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classes } from './/starsData.js'; 

const ClassSelector = () => {
  const [level, setLevel] = useState(1); 
  const navigate = useNavigate();

  const handleSelectClass = (className) => {
    console.log(`Selected class: ${className}`);
    navigate('/create'); // Proceed to the character creation page
  };

  const handleLevelChange = (event) => {
    setLevel(parseInt(event.target.value, 10)); // Update level based on dropdown selection
  };

  return (
    <div className="class-selector">
      <h1>Select Your Class</h1>
      <div className="level-selector">
        <label htmlFor="level">Level: </label>
        <select id="level" value={level} onChange={handleLevelChange}>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      {classes && Object.keys(classes).map((className) => (
        <div className="class-card" key={className}>
          <h2>{className}</h2>
          <p>Hit Die: {classes[className].hitDie}</p>
          <p>Attack Bonus: {classes[className].attackBonus[level - 1]}</p>
          <p>SAVE: {classes[className].saveProgression[level - 1]}</p>
          <p>Skill Points: {classes[className].skillPointsPerLevel}</p>
          <p>
            Abilities: {classes[className].abilities.length > 0 ? classes[className].abilities.join(', ') : 'None'}
          </p>
          <button onClick={() => handleSelectClass(className)}>Select</button>
        </div>
      ))}
    </div>
  );
};

export default ClassSelector;
