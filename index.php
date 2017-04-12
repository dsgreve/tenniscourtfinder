<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Tennis Court Map</title>
  <meta name="description" content="A geolocation based application to help find tennis courts in your area">
  <meta name="dale greve" content="map">
  <link rel="stylesheet" href="styles/styles.css?v=1.0">

  <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
  <![endif]-->

</head>
<body>
<div id="map"></div>

<!-- call google map api -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpL-RWRxurSid9WCK1RWj7ddHGHbPF4bE&callback=initMap"></script>
<script async defer src="scripts/mapScript.js"></script>
</body>
</html>
