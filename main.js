import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { GeoJsonCluster } from'../';
import toGeoJSON from './to-geojson';
import request from 'superagent';

import geojson from './example-geojson.js';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      buses: null
    };
  }

  componentWillMount() {
    request
      .get('https://data.texas.gov/resource/9e7h-gz56.json')
      .end(function(error, response){
        if (error) return console.error(error);

        this.setState({
          buses: toGeoJSON(response.body)
        })

      }.bind(this));
  }

  render () {
    return (
      <Map id="map" center={[30.25, -97.75]} zoom={13}>
        <TileLayer
          url='https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          id='paulserraino.n0dn3pbe' />
        <GeoJsonCluster data={this.state.buses} />
      </Map>
    );
  }

}

React.render(<App />, document.getElementById('map-container'));