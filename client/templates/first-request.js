Template.firstRequest.rendered = function() {
  window.onload = function() {
    var sw = new google.maps.LatLng(49.241457, -123.272635);
    var ne = new google.maps.LatLng(49.279883, -123.227145);
    var bounds = new google.maps.LatLngBounds(sw,ne);

    input = document.getElementById('autocomplete1');
    autocomplete1 = new google.maps.places.Autocomplete(input, { bounds: bounds, componentRestrictions: {country: "ca"}});
    input = document.getElementById('autocomplete2');
    autocomplete2 = new google.maps.places.Autocomplete(input, { bounds: bounds, componentRestrictions: {country: "ca"}});

    //// When the user selects an address from the dropdown,
    //google.maps.event.addListener(autocomplete, 'place_changed', function() {
    //  // Get the place details from the autocomplete object.
    //  var place = autocomplete.getPlace();
    //  console.log("place: " + JSON.stringify(place) );
    //});
  };
};

Template.firstRequest.helpers({
  exampleMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded() && Geolocation.latLng()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(Geolocation.latLng().lat, Geolocation.latLng().lng),
        zoom: 15
      };
    }
  }
});

Template.registerHelper("timeOptions", function() {
  return [
    {label: "2013", value: 2013},
    {label: "2014", value: 2014},
    {label: "2015", value: 2015}
  ];
});