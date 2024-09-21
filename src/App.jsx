import './App.css'
import Layout from './components/Layout/Layout'
import MatchHistory from './components/MatchHistory/MatchHistory';
import MatchSchedule from './components/MatchSchedule/MatchSchedule';
import PlayerInfo from './components/PlayerInfo/PlayerInfo';

import ScoreCard from './components/ScoreCard/ScoreCard';
function App() {


  return (
    <>
      <Layout />
      <MatchSchedule/>
      <MatchHistory/>
      <ScoreCard/>
      <PlayerInfo/>
    </>
  )
  
}

export default App
