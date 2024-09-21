import React from 'react';
import './MatchHistory.css';

const MatchHistory = () => {
  const batters = [
    { name: "Ravindra Jadeja", runs: 86, balls: 117, fours: 10, sixes: 2, strikeRate: 73.50, isNotOut: true },
    { name: "Ravichandran Ashwin", runs: 102, balls: 112, fours: 10, sixes: 2, strikeRate: 91.07, isNotOut: true },
  ];

  const bowlers = [
    { name: "Mominul Haque", overs: 1, maidens: 0, runs: 4, wickets: 0, economy: 4.00 },
    { name: "Mehidy Hasan Miraz", overs: 21, maidens: 2, runs: 77, wickets: 1, economy: 3.67 },
  ];

  const keyStats = {
    partnership: "195(227)",
    lastWicket: "KL Rahul c Zakir Hasan b Mehidy Hasan Miraz 16(52) - 144/6 in 42.2 ov.",
    last10Overs: "56 runs, 0 wkts",
    toss: "Bangladesh (Bowling)",
  };

  return (
    <div className="match-history-container">
      <div className="match-header">
        <h2>IND 339/6 (80) <span className="crr">CRR: 4.24</span></h2>
        <p className="day-info">Day 1: Stumps</p>
      </div>

      <div className="batting-section">
        <table className="batting-table">
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
            {batters.map((batter, index) => (
              <tr key={index}>
                <td>{batter.name} {batter.isNotOut && '*'}</td>
                <td>{batter.runs}</td>
                <td>{batter.balls}</td>
                <td>{batter.fours}</td>
                <td>{batter.sixes}</td>
                <td>{batter.strikeRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bowling-section">
        <table className="bowling-table">
          <thead>
            <tr>
              <th>Bowler</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>ECO</th>
            </tr>
          </thead>
          <tbody>
            {bowlers.map((bowler, index) => (
              <tr key={index}>
                <td>{bowler.name} *</td>
                <td>{bowler.overs}</td>
                <td>{bowler.maidens}</td>
                <td>{bowler.runs}</td>
                <td>{bowler.wickets}</td>
                <td>{bowler.economy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="key-stats-section">
        <h4>Key Stats</h4>
        <ul>
          <li><strong>Partnership:</strong> {keyStats.partnership}</li>
          <li><strong>Last Wkt:</strong> {keyStats.lastWicket}</li>
          <li><strong>Last 10 overs:</strong> {keyStats.last10Overs}</li>
          <li><strong>Toss:</strong> {keyStats.toss}</li>
        </ul>
      </div>

      <div className="recent-section">
        <h4>Recent:</h4>
        <p>| 0 | 1 | 0 | 0 | 0 | 1 | 2 | 0 | 1 | 0 | 0 |</p>
      </div>
    </div>
  );
};

export default MatchHistory;
