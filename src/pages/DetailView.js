import React, { useContext } from 'react';
import { Context } from '../store/store';
import Header from '../components/Header';
import moment from 'moment';

export default function DetailView({match:{params:{index}}}) {

  const formatDate = ( ts ) => { return moment(ts).format('MMM DD, YYYY, h:mm A'); };
  const [ state ] = useContext(Context);
  const features = state.data.features;
  const feature = features[index].properties;

  return (
    <div className="container">

      <Header pageName="detail" />

      <div className='content content-detail'>
        <h1 className='label'>{feature.title}</h1>
        <div className='wrapper-wrapper'>
          <div className='wrapper'>
            <div className="grid-container">
              <div className="grid-item">Title</div>
              <div className="grid-item">{feature.title}</div>
              <div className="grid-item">Magnitude</div>
              <div className="grid-item">{feature.mag}</div>
              <div className="grid-item">Time</div>
              <div className="grid-item">{formatDate(feature.time)}</div>
              <div className="grid-item">Status</div>
              <div className="grid-item">{feature.status}</div>
              <div className="grid-item">Tsunami</div>
              <div className="grid-item">{feature.tsunami}</div>
              <div className="grid-item">Type</div>
              <div className="grid-item">{feature.type}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
