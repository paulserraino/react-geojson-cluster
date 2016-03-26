'use strict';

exports.__esModule = true;
exports.GeoJsonCluster = undefined;

var _react = require('react');

var _reactLeaflet = require('react-leaflet');

var _leafletGeojsonCluster = require('leaflet-geojson-cluster');

var _leafletGeojsonCluster2 = _interopRequireDefault(_leafletGeojsonCluster);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GeoJsonCluster = exports.GeoJsonCluster = (function (_BaseTileLayer) {
  _inherits(GeoJsonCluster, _BaseTileLayer);

  function GeoJsonCluster() {
    _classCallCheck(this, GeoJsonCluster);

    return _possibleConstructorReturn(this, _BaseTileLayer.apply(this, arguments));
  }

  GeoJsonCluster.prototype.componentWillMount = function componentWillMount() {
    _BaseTileLayer.prototype.componentWillMount.call(this);
    var _props = this.props;
    var data = _props.data;
    var map = _props.map;

    var props = _objectWithoutProperties(_props, ['data', 'map']);

    this.leafletElement = (0, _leafletGeojsonCluster2.default)(data, props);
  };

  GeoJsonCluster.prototype.componentDidUpdate = function componentDidUpdate() {
    var _props2 = this.props;
    var data = _props2.data;
    var map = _props2.map;

    var props = _objectWithoutProperties(_props2, ['data', 'map']);

    map.removeLayer(this.leafletElement);
    this.leafletElement = (0, _leafletGeojsonCluster2.default)(data, props);
    map.addLayer(this.leafletElement);
  };

  return GeoJsonCluster;
})(_reactLeaflet.BaseTileLayer);

GeoJsonCluster.propTypes = {
  data: _react.PropTypes.object.isRequired
};