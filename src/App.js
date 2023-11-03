import './App.css';
import Texxt from '../src/modules/Text';
import React, { useState, useEffect } from 'react';
import Guts from './image/guts.png';
import Grif from './image/femto.png';

function App() {

    const [php, setpHp] = useState(100); 
    const [ohp, setoHp] = React.useState(100); 
    const [resultText, setResultText] = useState('');
    const [isPlayerTurn, setIsPlayerTurn] = useState(true);
    const [brrrr, setbrrrr] = useState('');

    function Result({ text }) {
      const fontSize = useState(16*5); 
  
    
      return (
        <div>
          <h1 id='resulttext' style={{ fontSize: `${fontSize}px`, transition: 'font-size 4s' }}>{text}</h1>
        </div>
      );
    }

    function Player() {
    
      return (
        <div>
          <div style={{ position: 'relative' }}>
            <img src={Guts} alt="Guts" />
            <div
              style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '10px',
                backgroundColor: 'red',
                border: '0.5px solid white', 
              }}
            >
              <div class='bar'
                style={{
                  width: `${php}%`,
                  height: '100%',
                  backgroundColor: 'green',
                }}
              ></div>
            </div>
          </div>
        </div>
      );
    }
    function Opponent() {

      return (
          <div>
              <div style={{ position: 'relative' }}>
                  <img src={Grif} alt='griffith'/>
                  <div
                      style={{
                          position: 'absolute',
                          top: '-40px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100px',
                          height: '10px',
                          backgroundColor: 'red',
                          border: '0.5px solid white', 
                      }}
                  >
                      <div class='bar'
                          style={{
                              width: `${ohp}%`,
                              height: '100%',
                              backgroundColor: 'green',
                          }}
                      ></div>
                  </div>
              </div>
          </div>
      );
    }
    function AttackSelection() {
      const attackList = [
        { name: "beast of darkness", damage: 50},
        { name: "dragon slayer", damage: 15},
        { name: "crossbowe", damage: 10 },
        { name: "canon arm", damage: 15 },
      ];

      useEffect(() => {

        if (ohp <= 0 && php > 0) {
          setResultText("you win");
          setIsPlayerTurn(false)
          setbrrrr('bgje')
          setTimeout(() => {
            setoHp(100);
            setpHp(100);
          }, 5000);
          setTimeout(() =>
          {}, 5000)
          setIsPlayerTurn(true)
          setbrrrr('')
          return
        }
        if (php <= 0 && ohp > 0) {
          setResultText("you loose");
          setIsPlayerTurn(false)
          setbrrrr('bgje')
          setTimeout(() => {
            setoHp(100);
            setpHp(100);
          }, 5000);
          setTimeout(() =>
          {}, 5000)
          setIsPlayerTurn(true)
          setbrrrr('')
          return
        }
        if (resultText !== '') {
          setResultText('');
        }
      }, )

      function damagef(attack) {
        if (isPlayerTurn && php > 0 && ohp > 0 && !resultText) {
          setoHp(ohp - attack.damage);
            setIsPlayerTurn(false);
        }
        if (!brrrr && !resultText) {
            setTimeout(() => {
              setpHp(php - Math.floor(Math.random() * 50));
            setIsPlayerTurn(true);
            }, 1500);
        }
      }

      return (
        <div className="container">
          {attackList.map((attack) => (
            <button key={attack.name} onClick={() => damagef(attack)} disabled={!isPlayerTurn}>
              {attack.name}
            </button>
          ))}
        </div>
      );
          }
    

  return (
    <div>
      <body>
        <div id='metoiaumillieuptn'>
        <Result text={resultText} />
        </div>
        <div class='Combat'>
          <Player id="Playerr"/>
          <Opponent id="Opponentt"/> 
        </div>
        <div class="Menu">
          <div class="Text">
            <Texxt/>
          </div>
          <div class="Button">
            <AttackSelection/>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
