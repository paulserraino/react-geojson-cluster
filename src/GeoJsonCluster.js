import { PropTypes } from 'react';
import { geoJson } from 'leaflet';

import { PopupContainer } from 'react-leaflet';
import cluster from 'leaflet-geojson-cluster';

export class GeoJsonCluster extends PopupContainer {
  componentWillMount() {
    super.componentWillMount();
    const { data, map, ...props } = this.props;
    this.leafletElement = cluster(data, props);
  }
}

GeoJsonCluster.propTypes = {
  data: PropTypes.object.isRequired
};
