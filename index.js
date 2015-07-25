import React from 'react'
import leaflet from 'leaflet';
import { GeoJson, Map, Marker, Popup, TileLayer } from 'react-leaflet';
import * as data from './example/data/park_124.json';
const position = [51.505, -0.09];

import { GeoJsonCluster } from './lib/GeoJsonCluster';

function iconCreateFunction (cluster) {
  //return new L.DivIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
  var icon = {
    iconUrl: 'images/marker-icon.png'
  };

  return new L.icon(icon);
}

class App extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
       <Map id='map' ref='map' center={[30.267153, -97.743061]} zoom={12} minZoom={10}>
            <TileLayer
                url='https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png'
                attribution='<a href="http://openstreetmap.org">OpenStreetMap</a> | <a href="http://mapbox.com">Mapbox</a>'
                id='drmaples.ipbindf8' />
            <GeoJsonCluster data={this.props.geoData} iconCreateFunction={iconCreateFunction} />
        </Map>
    );
  }
}


React.render(<App geoData={data} />, document.querySelector('#app'))