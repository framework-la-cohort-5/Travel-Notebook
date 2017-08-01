

  // function geocode(){
  //     $.ajax({
  //   type: 'GET',
  //   url: url,
  //   dataType: 'json',
  //   success: function(data){
  //     console.log (data);
  //     $("#location").append(data.current_observation.display_location.city);
  //     $("#time").append(data.current_observation.display_location.city);
  //     $("#temp").append(data.current_observation.display_location.city);
  //     $("#feels").append(data.current_observation.display_location.city);
  //     $("#wind").append(data.current_observation.display_location.city);
  //     $("#precip").append(data.current_observation.display_location.city);
  //   }
  // })


  // }
    // var locationForm = document.getElementById('location-form');
    // locationForm.addEventListener('submit')


    var map;
      var infowindow;

      function initMap() {
        var searchLocation = {lat: -33.867, lng: 151.195};

        map = new google.maps.Map(document.getElementById('map'), {
          center: searchLocation,
          zoom: 14,
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: searchLocation,
          radius: 5000,
          type: ['gym']
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            placeMarkers(results[i]);
          }
        }
        // function addMarker() {
        //   var marker = new google.maps.Marker({
        //    map: map,
        //    position: searchLocation,
        //    icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        //   });
        // }
      }


      function placeMarkers(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
        });
        console.log(place.name);
        // var list1 = place.name;
        // document.body.appendChild(place.name);
        $("#location").append(place.name);

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }