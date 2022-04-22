import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { formatISO } from 'date-fns'
import moment from 'moment';

const Calendario = ({ events }) => {
  const [date, setDate] = useState(new Date());
  // const [dates, setDates] = useState(null);
  const dates = events.map(event => event.start.dateTime)
  console.log(dates);


  const changeDate = (e) => {
    const x = moment(e).isSame(new Date(), 'day');
    console.log(x);
  }

  function tileClassName({ date, view }) {
    if (view === 'month') {
      // dates.forEach(dDate => console.log(moment(dDate).isSame(date, 'day')))
      if (dates.find(dDate => moment(dDate).isSame(date, 'day'))) {
        console.log('hola');
        return 'event-days';
      }
    }
  }

  return (
    <div className="calendario">
      <div className="container">
        <div className="event-calendar">
          <div className="event">
            <h3>21</h3>
            <h2>Jueves</h2>
            <button>Feria Metrocentro</button>
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