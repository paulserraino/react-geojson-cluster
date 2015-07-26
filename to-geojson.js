module.exports = function toGeoJSON (data) {
  var collection = {
    "type": "FeatureCollection",
      "features": []
  };

  var tmpl = [
  '{'
  , '"type": "Feature",'
  , '"properties": {"foo": "bar"},'
  , '"geometry": {'
  ,  '"type": "Point",'
  ,  '"coordinates": [:loc]'
    , '}'
  , '}'
  ].join('');

   data.forEach(function (datum) {
    try {
      var t = tmpl.replace(':loc', datum.location.split(',').reverse().join(','))
      t = JSON.parse(t);
      collection.features.push(t);
    } catch (err) {
      console.log('error parsing', datum);
    }
  });

  return collection;
}