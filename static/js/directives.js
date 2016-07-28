app.directive('directionsMap', function(){
  return {
    restrict: 'A',
    
    link: function (scope, element, attrs) {

      
      var mapEl = element[0];
      

      console.log(mapEl);

      var myLatLng = {lat: 47.646282, lng: -122.340104 };
      var tuttabella = {lat: 47.660406, lng: -122.342521};
      
      

      var map = new google.maps.Map(mapEl, {
        zoom: 13,
        center: myLatLng,
      });
      var tuttabella_marker = new google.maps.Marker({
        position: tuttabella,
        map: map,
        title: "Tutta Belle Pizza",
        animation: google.maps.Animation.DROP
       
      });
     
    }
    
  };
});

