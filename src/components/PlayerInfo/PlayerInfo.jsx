import React from 'react';
import './PlayerInfo.css';

const players = [
  { position: 1, name: 'Joe Root', country: 'ENGLAND', rating: 899 },
  { position: 2, name: 'Kane Williamson', country: 'NEW ZEALAND', rating: 859 },
  { position: 3, name: 'Daryl Mitchell', country: 'NEW ZEALAND', rating: 768 },
  { position: 4, name: 'Steven Smith', country: 'AUSTRALIA', rating: 757, change: '▲1' },
  { position: 5, name: 'Rohit Sharma', country: 'INDIA', rating: 751, change: '▼1' },
];

const PlayerInfo = () => {
  return (
    <div className="player-info-container">
      <h1>ICC Cricket Rankings mens s Batting</h1>
      <div className="filter-buttons">
        <button className="filter active">TEST</button>
        <button className="filter">ODI</button>
        <button className="filter">T20</button>
      </div>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.position}>
              <td>{player.position}</td>
              <td>
                <div className="player-info">
                  <img
                    className="player-img"
                    src={`/images/${player.name.toLowerCase().replace(' ', '_')}.png`}
                    alt={player.name}
                  />
                  <div className="player-details">
                    <span className="player-name">{player.name}</span>
                    <span className="player-country">{player.country}</span>
                  </div>
                  {player.change && <span className="player-change">{player.change}</span>}
                </div>
              </td>
              <td>{player.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerInfo;
