import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

const Calendario = ({ events }) => {
  const [displayedEvent, setDisplayedEvent] = useState(events[0]);
  console.log(moment(displayedEvent.start.dateTime).format('dddd'));

  const changeDate = (date) => {
    const event = events.find(event => moment(date).isSame(event.start.dateTime, 'day'))
    if (event) {
      setDisplayedEvent(event);
    }
    else {
      setDisplayedEvent({
        start: {
          dateTime: date
        },
        summary: 'Sin eventos'
      })
    }
  }

  function tileClassName({ date, view }) {
    const dates = events.map(event => event.start.dateTime)
    if (view === 'month') {
      if (dates.find(dDate => moment(dDate).isSame(date, 'day'))) {
        return 'event-days';
      }
    }
  }

  return (
    <div className="calendario">
      <div className="container">
        <div className="event-calendar">
          <div className="event">
            <h3>{moment(displayedEvent.start.dateTime).format('D')}</h3>
            <h2>{moment(displayedEvent.start.dateTime).format('dddd')}</h2>
            <button>{displayedEvent.summary}</button>
          </div>
          <Calendar
            locale="es-es"
            onChange={changeDate}
            formatDay={(locale, date) => moment(date).format('DD')}
            formatShortWeekday={(locale, date) => moment(date).format('dd')[0]}
            formatMonthYear={(locale, date) => {
              const str = moment(date).format('MMMM')
              const str2 = str.charAt(0).toUpperCase() + str.slice(1);
              return str2;
            }}
            showNeighboringMonth={false}
            tileClassName={tileClassName}
          />
        </div>
      </div>
    </div>
  )
}

export default Calendario;