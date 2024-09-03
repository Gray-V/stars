// Character classes and their level-up details
// starsData.js

export const classes = {
  Warrior: {
    hitDie: 6,
    attackBonus: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // +1 per level
    saveProgression: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6],
    skillPointsPerLevel: 2,
    abilities: [],
  },
  Expert: {
    hitDie: 6,
    attackBonus: [0, 0, 1, 1, 2, 2, 3, 3, 4, 4],
    saveProgression: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6],
    skillPointsPerLevel: 4,
    abilities: [],
  },
  Psychic: {
    hitDie: 6,
    attackBonus: [0, 0, 0, 1, 1, 1, 2, 2, 2, 3],
    saveProgression: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6],
    skillPointsPerLevel: 3,
    abilities: [],
  },
};

  
  // Example character object to store character information
  const character = {
    name: 'Jane Doe',
    class: 'Warrior',
    level: 1,
    xp: 0,
    hitPoints: 6, // Starting hit points based on class and level
    attackBonus: 1,
    saves: {
      physical: 15,
      mental: 15,
      evasion: 15,
    },
    skills: {
      // Key-value pairs of skills and their levels
      Combat: 0,
      Survival: 1,
      Pilot: 2,
    },
    foci: [
      // List of foci with levels
    ],
    equipment: {
      // Equipment details
    },
  };
  
  // Function to level up a character
  function levelUp(character) {
    const charClass = classes[character.class];
    if (!charClass) {
      console.error('Invalid character class.');
      return;
    }
  
    // Increase level
    character.level += 1;
  
    // Increase hit points by rolling the class-specific hit die
    character.hitPoints += rollHitDie(charClass.hitDie);
  
    // Update attack bonus based on class progression
    character.attackBonus = charClass.attackBonus[character.level - 1];
  
    // Update saves based on class progression
    character.saves.physical = charClass.saveProgression[character.level - 1];
    character.saves.mental = charClass.saveProgression[character.level - 1];
    character.saves.evasion = charClass.saveProgression[character.level - 1];
  
    // Add skill points
    const skillPoints = charClass.skillPointsPerLevel;
    console.log(
      `${character.name} has leveled up to level ${character.level} and gained ${skillPoints} skill points!`
    );
  
    // Logic for updating abilities and other class-specific details can be added here if needed
  }
  
  // Function to simulate rolling a hit die
  function rollHitDie(die) {
    return Math.floor(Math.random() * die) + 1;
  }
  
  // Example of leveling up the character
  levelUp(character);
  
  console.log(character);
  