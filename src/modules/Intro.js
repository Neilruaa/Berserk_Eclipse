import React, { useState } from 'react';
import '../App.css'; 
import main from'../App'

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroClose = () => {
    setShowIntro(false);
  };

  return (
    <div className="app-container">
        <div className={`intro-overlay ${showIntro ? 'show' : ''}`}>
        <div className="intro-container">
          <h1>BERSERK</h1>
          <button onClick={handleIntroClose}>Start</button>
          <h2>after each fight wait a bit for a new one</h2>
        </div>
        <div className={`main-container ${showIntro ? 'hide' : ''}`}>
        </div>
        </div>
        <div className="main-container">
          {main}
        </div>
    </div>
  );
}

export default App;