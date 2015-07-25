import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { GeoJsonCluster } from'../';

import geojson from './example-geojson.js';

const map = <Map id="map" center={[30.25, -97.75]} zoom={13}>
  <TileLayer
    url='https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png'
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    id='paulserraino.n0dn3pbe' />
  <GeoJsonCluster data={geojson} />
</Map>;

React.render(map, document.getElementById('map-container'));