import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterCreation from './components/CharacterCreation';
import CharacterSheet from './components/CharacterSheet';
import './App.css';
import ClassSelector from './components/ClassSelector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class-selector" element={<ClassSelector />} />
        <Route path="/create" element={<CharacterCreation />} />
        <Route path="/sheet" element={<CharacterSheet />} />
      </Routes>
    </Router>
  );
}

export default App;
