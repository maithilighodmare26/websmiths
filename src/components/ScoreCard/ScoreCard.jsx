import React from 'react';
import './ScoreCard.css';

const Scorecard = () => {
  const players = [
    { name: "Reeza Hendricks", out: "b Fazalhaq Farooqi", runs: 9, balls: 12, fours: 1, sixes: 0, strikeRate: 75.00 },
    { name: "Tony de Zorzi", out: "c Shahidi b Fazalhaq Farooqi", runs: 11, balls: 18, fours: 1, sixes: 0, strikeRate: 61.11 },
    { name: "Markram (c)", out: "b Fazalhaq Farooqi", runs: 2, balls: 5, fours: 0, sixes: 0, strikeRate: 40.00 },
    { name: "Tristan Stubbs", out: "c Nabi b Allah Ghazanfar", runs: 0, balls: 5, fours: 0, sixes: 0, strikeRate: 0.00 },
    { name: "Verreynne (wk)", out: "lbw b Allah Ghazanfar", runs: 10, balls: 11, fours: 2, sixes: 0, strikeRate: 90.91 },
    { name: "J Smith", out: "b Allah Ghazanfar", runs: 0, balls: 5, fours: 0, sixes: 0, strikeRate: 0.00 },
    { name: "Wiaan Mulder", out: "b Fazalhaq Farooqi", runs: 52, balls: 84, fours: 5, sixes: 1, strikeRate: 61.90 },
    { name: "Phehlukwayo", out: "run out (Gulbadin)", runs: 0, balls: 4, fours: 0, sixes: 0, strikeRate: 0.00 },
    { name: "Bjorn Fortuin", out: "b Rashid Khan", runs: 16, balls: 34, fours: 2, sixes: 0, strikeRate: 47.06 },
    { name: "Nandre Burger", out: "not out", runs: 1, balls: 18, fours: 0, sixes: 0, strikeRate: 5.56 },
    { name: "Lungi Ngidi", out: "lbw b Rashid Khan", runs: 0, balls: 6, fours: 0, sixes: 0, strikeRate: 0.00 },
  ];

  return (
    <div className="scorecard-container">
      <div className="scorecard-header">
        <h2>South Africa Innings</h2>
        <span>106-10 (33.3 Ov)</span>
      </div>
      <table className="scorecard-table">
        <thead>
          <tr>
            <th>Batter</th>
            <th>R</th>
            <th>B</th>
            <th>4s</th>
            <th>6s</th>
            <th>SR</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name} <br /> <span className="out-detail">{player.out}</span></td>
              <td>{player.runs}</td>
              <td>{player.balls}</td>
              <td>{player.fours}</td>
              <td>{player.sixes}</td>
              <td>{player.strikeRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="scorecard-footer">
        <p>Extras: 5 (b 0, lb 2, w 2, nb 1, p 0)</p>
        <p>Total: 106 (10 wkts, 33.3 Ov)</p>
      </div>
    </div>
  );
};

export default Scorecard;
