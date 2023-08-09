import React from 'react';
import './Events.css';

const Events = ({ eventData }) => {
  return (
    
    <div className="events-container">
        <div className="events-title">
       <h1>Take a look at our upcoming events</h1></div>
      {eventData.map((event, index) => {
        const [month, day, year] = event.date.split(" ");
        return (
          <div key={index} className="event-card">
            <div className="event-date-card">
              <div className="event-date-number">{month}</div>
              <div className="event-date-month-year">
                <span className="event-date-month">{day}</span>
                <span className="event-date-year">{year}</span>
              </div>
            </div>
            <div className="event-content">
              <div className="event-image-container">
                <img src={event.imageUrl} alt={`Event ${index}`} className="event-image" />
              </div>
              <div className="event-description">
                <h3 className="event-description-date">{event.date}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
