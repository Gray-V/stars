// src/components/ClassSelector.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { classes } from './/starsData'; // Ensure this path is correct

const ClassSelector = () => {
  const [level, setLevel] = useState(1); // State to track selected level
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
      {classes && Object.keys(classes).map((className) => {
        const classData = classes[className];
        const totalSkillPoints = classData.skillPointsPerLevel * level; // Calculate total skill points

        return (
          <div className="class-card" key={className}>
            <h2>{className}</h2>
            <p>Hit Die: {classData.hitDie}</p>
            <p>Attack Bonus: {classData.attackBonus[level - 1]}</p>
            <p>SAVE: {classData.saveProgression[level - 1]}</p>
            <p>Skill Points: {totalSkillPoints} (per level {classData.skillPointsPerLevel})</p>
            <p>
              Abilities: {classData.abilities.length > 0 ? classData.abilities.join(', ') : 'None'}
            </p>
            <button onClick={() => handleSelectClass(className)}>Select</button>
          </div>
        );
      })}
    </div>
  );
};

export default ClassSelector;
