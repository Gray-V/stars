// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Stars Without Number Character Sheet</h1>
      <Link to="/class-selector">
        <button>Start Character Creation</button>
      </Link>
    </div>
  );
}

export default Home;
