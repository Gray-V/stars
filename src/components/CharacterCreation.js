import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function CharacterCreation() {
  const [character, setCharacter] = useState({
    name: '',
    class: '',
    race: '',
    level: 1,
    attributes: {
      strength: 0,
      intelligence: 0,
      dexterity: 0,
      wisdom: 0,
      constitution: 0,
      charisma: 0,
    },
    // Add more fields as needed
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleNext = () => setStep(step + 1);
  const handlePrevious = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Save character data to local storage or state management
    localStorage.setItem('character', JSON.stringify(character));
    navigate('/sheet'); // Use navigate to change routes
  };

  return (
    <div className="character-creation">
      {step === 1 && (
        <div>
          <h2>Step 1: Basic Info</h2>
          <input
            type="text"
            name="name"
            placeholder="Character Name"
            value={character.name}
            onChange={handleChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Class</h2>
          <select name="class" value={character.class} onChange={handleChange}>
            <option value="physic">Physic</option>
            <option value="warrior">Warrior</option>
            <option value="expert">Expert</option>
            <option value="adventurer">Adventurer</option>
          </select>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Race</h2>
          <select name="race" value={character.race} onChange={handleChange}>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
          </select>
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleSubmit}>Finish</button>
        </div>
      )}
    </div>
  );
}

export default CharacterCreation;
