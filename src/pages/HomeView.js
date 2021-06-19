import React, { useState, useContext } from 'react';
import { Context } from '../store/store';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function HomeView() {

  // get state vars
  const [ state ] = useContext(Context);
  const title = state.data.metadata.title;
  const [ features, setFeatures ] = useState( state.data.features );
  const [ sortAsc, setSortAsc ] = useState( true );
  const [ sortBy, setSortBy ] = useState();

  const sortData = col => {

    let asc = true; // added local var, improves click responsiveness
    if ( sortBy === col ) { asc = !sortAsc; setSortAsc( sortAsc => !sortAsc ) }
    else { setSortAsc(true) }
    setSortBy( col );

    if ( asc ) {
      setFeatures( features => features.sort( (a, b) => {

        if ( a.properties[col] < b.properties[col] ) return -1;
        else if ( a.properties[col] > b.properties[col] ) return 1;
        else return 0;

      }));
    } else {

      setFeatures( features => features.sort( (a, b) => {
        if ( a.properties[col] > b.properties[col] ) return -1;
        else if ( a.properties[col] < b.properties[col] ) return 1;
        else return 0;
      }));

    }

  }

  const formatDate = ( ts ) => { return moment(ts).format('MMM DD, YYYY, h:mm A'); };
  const featureList = features.map( (feature, index) => {
    const props = feature.properties;
    return <React.Fragment key={index}>
      <div className="grid-item"><Link to={`/detail/${index}`}>{props.place}</Link></div>
      <div className="grid-item">{props.mag}</div>
      <div className="grid-item">{formatDate(props.time)}</div>
    </React.Fragment>
  });

  return (
    <div className="container">

      <Header pageName="home" />

      <div className='content content-home'>
        <h1 className='label'>USGS All Earthquakes, Past Hour</h1>
        <div className='wrapper-wrapper'>
          <div className='wrapper'>
            <div className="grid-container">
              <div className="grid-item" onClick={ () => sortData('place') }>Title</div>
              <div className="grid-item" onClick={ () => sortData('mag') }>Magnitude</div>
              <div className="grid-item" onClick={ () => sortData('time') }>Time</div>
              {featureList}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
