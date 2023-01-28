import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import { graphql, useStaticQuery } from 'gatsby';

const Calendario = () => {

  const data = useStaticQuery(graphql`
    query{
      allWpEvento {
        nodes {
          eventos {
            date
            name
            url
          }
        }
      }
    }
  `);

  const events = data.allWpEvento.nodes.map(node => node.eventos);

  const [displayedEvent, setDisplayedEvent] = useState(events[0]);

  const changeDate = (date) => {
    const event = events.find(event => moment(date).isSame(event.date, 'day'))
    if (event) {
      setDisplayedEvent(event);
    }
    else {
      setDisplayedEvent({
        date: date,
        name: 'Sin eventos'
      })
    }
  }

  function tileClassName({ date, view }) {
    const dates = events.map(event => event.date)
    if (view === 'month') {
      if (dates.find(dDate => moment(dDate).isSame(date, 'day'))) {
        return 'event-days';
      }
    }
  }

  const getDayOfTheWeek = (date) => {
    const day = moment(date).format('dddd');
    return day.charAt(0).toUpperCase() + day.substring(1)
  }

  return (
    <div className="calendario">
      <div className="container">
        <h2>Conocé nuestra agenda</h2>
        <p className="subtitulo">Estamos activos con eventos todo el año.</p>
        <div className="event-calendar">
          <div className="event">
            <h2>{moment(displayedEvent.date).format("D")}</h2>
            <h3>{getDayOfTheWeek(displayedEvent.date)}</h3>
            <a href={displayedEvent.url} target="_blank">
              <button>{displayedEvent.name}</button>
            </a>
          </div>
          <Calendar
            locale="es-es"
            onChange={changeDate}
            formatDay={(locale, date) => moment(date).format("DD")}
            formatShortWeekday={(locale, date) => moment(date).format("dd")[0]}
            formatMonthYear={(locale, date) => {
              const str = moment(date).format("MMMM");
              const str2 = str.charAt(0).toUpperCase() + str.slice(1);
              return str2;
            }}
            showNeighboringMonth={false}
            tileClassName={tileClassName}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendario;