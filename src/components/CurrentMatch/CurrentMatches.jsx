import { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentMatches() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.cricapi.com/v1/currentMatches?apikey=d7a962df-0ce0-4cbf-bedc-54f19e9646c0&offset=0')
      .then((response) => {
        setMatches(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Current Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.id}>
            {match.teams[0]} vs {match.teams[1]} <br />
            Status: {match.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CurrentMatches;
