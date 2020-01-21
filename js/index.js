/* eslint-disable no-unused-vars, no-shadow-global */
/* globals google */

const mapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#eceff1"
      }
    ]
  },
  {
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "labels",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#cfd8dc"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "road.local",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    stylers: [
      {
        color: "#b0bec5"
      }
    ]
  }
];
var image =
  "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
var i = "../css/bull.png";
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.979228, lng: 73.758438 },
    zoom: 18
    // styles: mapStyle
  });
//   var image = "https://example.com/images/carnew.svg";
  var marker = new google.maps.Marker({
    position: { lat: 19.979228, lng: 73.758438 },
    map: map,
    icon :i
  });
}
