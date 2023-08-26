import './Events.css';
import supabase from "./config/supabaseclient";
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css'
import { useState, useEffect } from "react";

const Events = () => {

  const [fetchError, setFetchError] = useState(null);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const { data, error } = await supabase
          .from('events')
          .select();

        if (error) {
          setFetchError('Could not fetch events');
          console.log(error);
        } else {
          setEvent(data || []);
          setFetchError(null);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvent();
  }, []);

  console.log(event);

  return (
    <div className="events-container">
      {fetchError && <p>{fetchError}</p>}
      <div className="events-title">
        <h1>Take a look at our upcoming events</h1>
      </div>
      {event.map((eventItem) => {
        const [month, day, year] = eventItem.date.split(" ");
        return (
          <div key={eventItem.id} className="event-card">
            <div className="event-date-card">
              <div className="event-date-number">{month}</div>
              <div className="event-date-month-year">
                <span className="event-date-month">{day}</span>
                <span className="event-date-year">{year}</span>
              </div>
            </div>
            <div className="event-content">
              <div className="event-image-container">
                <img src={eventItem.imageurl} alt={`Event ${eventItem.id}`} className="event-image" />
              </div>
              <div className="event-description">
                <h3 className="event-description-date">{eventItem.date}</h3>
                <p>{eventItem.description}</p>
              </div>
              <div className='calender-width'>
              <div style={{ width: '300px' }}>
                  <Calendar value={new Date(eventItem.the_date)} />
              </div>
               
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;
