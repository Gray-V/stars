import React, { useState, useEffect } from 'react';

function CharacterSheet() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const storedCharacter = JSON.parse(localStorage.getItem('character'));
    setCharacter(storedCharacter);
  }, []);

  const levelUp = () => {
    setCharacter((prev) => ({
      ...prev,
      level: prev.level + 1,
      // Add logic to increase stats or skills
    }));
  };

  useEffect(() => {
    if (character) {
      localStorage.setItem('character', JSON.stringify(character));
    }
  }, [character]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-sheet">
      <h2>Character Sheet: {character.name}</h2>
      <p>Class: {character.class}</p>
      <p>Race: {character.race}</p>
      <p>Level: {character.level}</p>
      <button onClick={levelUp}>Level Up</button>
      {/* Add sections to display attributes, skills, inventory, etc. */}
    </div>
  );
}

export default CharacterSheet;
