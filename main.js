
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.77, -122.42),
    zoom: 13
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  var addCircle = function(e) {
    var myLatlng = e.latLng;
      new google.maps.Circle({
      map: map,
      fillColor: "#F00",
      center: myLatlng,
      radius: 800,
      fillOpacity: .05,
      clickable: false,
      strokeColor: '#FFF',
      strokeOpacity: 0
    })
  };    
google.maps.event.addDomListener(map, 'click', addCircle);
}
google.maps.event.addDomListener(window, 'load', initialize);