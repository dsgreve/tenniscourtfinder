// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.750368, lng: -73.845612},
    zoom: 12
  });
  var infoWindow = new google.maps.InfoWindow({map: map});


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Ready to Play?');
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  setMarkers(map);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Geolocation is required to use this App.' :
                        'Error: Your browser doesn\'t support geolocation.');
}



var tennisCourts = [
  ['Athens High School', 42.580770, -83.114275, 2],
  ['Troy Raquet Club', 42.5684268, -83.1557697, 1]
];

function setMarkers(map) {
  //Add Markers to Map
  var image = {
    url: 'images/tennis-court-icon.png',
    size: new google.maps.Size(24,24),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0,14)
  };

  var shape = {
          coords: [1, 1, 1, 24, 18, 24, 18, 1],
          type: 'poly'
        };
        for (var i = 0; i < tennisCourts.length; i++) {
          var court = tennisCourts[i];
          var marker = new google.maps.Marker({
            position: {lat: court[1], lng: court[2]},
            map: map,
            icon: image,
            shape: shape,
            title: court[0],
            zIndex: court[3]
          });
        }
}
/**
var myLatLng = {lat: 42.580770, lng: -83.114275}
var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
**/
