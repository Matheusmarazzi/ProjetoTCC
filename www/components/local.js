// This is a JavaScript file
  function mostramapa(lat,long){
    L.mapquest.key = 'M6YEjAkLxl4ShevHouHFp02pyEOSHm6A';

      var map = L.mapquest.map('map', {
        center: [lat, long],
        layers: L.mapquest.tileLayer('map'),
        zoom:16
        
      });
        var smallMarker = L.icon({
        iconUrl: 'https://assets.mapquestapi.com/icon/v2/marker-sm.png',
        iconRetinaUrl: 'https://assets.mapquestapi.com/icon/v2/marker-sm@2x.png',
        iconSize: markerSize.sm,
        iconAnchor: markerAnchor.sm,
        popupAnchor: markerPopupAnchor.sm
  });
      L.marker([-24.1826792927263,-46.78078414096063]).addTo(map);
     

      map.addControl(L.mapquest.control());



  }
function cordenatas(){



    var onSuccess = function(position) {
        mostramapa(position.coords.latitude,position.coords.longitude)

    };
 

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' + 
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    };
    cordenatas();
