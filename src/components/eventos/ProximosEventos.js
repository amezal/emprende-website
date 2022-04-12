import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { Img } from 'gatsby-plugin-image';

const ProximosEventos = ({ event }) => {
  moment.locale('es');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(event).length !== 0) {
      setLoading(false);
    }
  }, [event])

  return (
    <div className="proximos-eventos">
      <div className="container">
        <h2>Próximos eventos</h2>
        <div className="evento">
          <img src="https://picsum.photos/230/180" alt="" />
          <div className="content">
            {!loading &&
              <h3>{moment(event.start.dateTime).format('D [de] MMMM')}</h3>
            }
            <h2>{event.summary}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProximosEventos;