import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Turnaments from '../Tournament/Turnaments'
import Profile from '../Profile/Profile'
import Contact from '../Contact/Contact';
import Registration from '../Registration/Registration'
import ScoreCard from '../ScoreCard/ScoreCard'; 
import Login from '../Login/Login'
import MatchHistory from '../MatchHistory/MatchHistory'
import MatchSchedule from '../MatchSchedule/MatchSchedule'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
function Layout() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/turnaments' element={<Turnaments/>} />
                    <Route path='/profile' element={<Profile/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/registor' element={<Registration/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/scorecard' element={<ScoreCard/>} /> 
                    <Route path='/MatchHistory'element={<MatchHistory/>} />
                    <Route path='/MatchSchedule' element={<MatchSchedule/>}/>
                    <Route path='/PlayerInfo' element={<PlayerInfo/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
