
var userArray = [];
function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(37.77, -122.42),
    zoom: 13,
    disableDefaultUI: true,
    zoomControl: true,
    styles:  [ { featureType: "poi", elementType: "labels", stylers: [ { visibility: "off" } ] } ]
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
//Slider init with current hour to 4 hours from now
  $("#slider-el").rangeSlider({
    bounds: {
      min: 0,
      max: 240
    },
    arrows: true,
    defaultValues: {
      min: 30,
      max: 75
    },
    range: {
      min: 45},
    step: 15,
//This adjusts the display of the tooltip values
    formatter: function(val) {
     if (val===0) {
      return moment().format("h:mma");
     }
     else {
      return moment().add('minutes', val).format("h:mma")
     }
    }
  });
// This is the resize listener that makes maps responsive
google.maps.event.addDomListener(window, "resize", function() {
 var center = map.getCenter();
 google.maps.event.trigger(map, "resize");
 map.setCenter(center); 
});
google.maps.event.addDomListener(map, 'click', addCircle);
}
google.maps.event.addDomListener(window, 'load', initialize);