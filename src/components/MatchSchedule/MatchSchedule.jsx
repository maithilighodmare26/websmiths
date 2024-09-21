import React from 'react';
import './MatchSchedule.css';

const MatchSchedule = () => {
  const matches = [
    {
      date: "THU, SEP 19 2024",
      events: [
        {
          series: "Bangladesh tour of India, 2024",
          match: "India vs Bangladesh, 1st Test, Day 1",
          venue: "MA Chidambaram Stadium, Chennai",
          time: "9:30 AM",
          timeDetails: "04:00 AM GMT / 09:30 AM LOCAL"
        },
        {
          series: "Australia tour of England, 2024",
          match: "England vs Australia, 1st ODI",
          venue: "Trent Bridge, Nottingham",
          time: "5:00 PM",
          timeDetails: "11:30 AM GMT / 12:30 PM LOCAL"
        },
        {
          series: "New Zealand tour of Sri Lanka, 2024",
          match: "Sri Lanka vs New Zealand, 1st Test, Day 2",
          venue: "Galle International Stadium, Galle",
          time: "10:00 AM",
          timeDetails: "04:30 AM GMT / 10:00 AM LOCAL"
        }
      ]
    },
    {
      date: "FRI, SEP 20 2024",
      events: [
        {
          series: "Bangladesh tour of India, 2024",
          match: "India vs Bangladesh, 1st Test, Day 2",
          venue: "MA Chidambaram Stadium, Chennai",
          time: "9:30 AM",
          timeDetails: "04:00 AM GMT / 09:30 AM LOCAL"
        }
      ]
    }
  ];

  return (
    <div className="schedule-page">
      <h1>Cricket Schedule</h1>
      <div className="filters">
        <button className="filter-btn active">International</button>
        <button className="filter-btn">Domestic & Others</button>
        <button className="filter-btn">T20 Leagues</button>
        <button className="filter-btn">Women</button>
        <button className="filter-btn">All Matches</button>
      </div>

      {matches.map((day, index) => (
        <div key={index} className="match-day">
          <h3>{day.date}</h3>
          {day.events.map((event, idx) => (
            <div key={idx} className="match-event">
              <div className="event-details">
                <p className="series">{event.series}</p>
                <p className="match">{event.match}</p>
                <p className="venue">{event.venue}</p>
              </div>
              <div className="event-time">
                <p className="time">{event.time}</p>
                <p className="time-details">{event.timeDetails}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatchSchedule;
