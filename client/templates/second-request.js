Template.secondRequest.rendered = function() {
  waitForGoogleMaps();
  function waitForGoogleMaps() {
    if (!GoogleMaps.loaded()) {
      setTimeout(waitForGoogleMaps, 100);
    } else {
      autoCompleteSetup();
    }
  }

  function autoCompleteSetup () {
    var sw = new google.maps.LatLng(49.241457, -123.272635);
    var ne = new google.maps.LatLng(49.279883, -123.227145);
    var bounds = new google.maps.LatLngBounds(sw, ne);

    input = document.getElementById('autocomplete1')
    autocomplete1 = new google.maps.places.Autocomplete(input, {
      bounds: bounds,
      componentRestrictions: {country: "ca"}
    });
    input = document.getElementById('autocomplete2');
    autocomplete2 = new google.maps.places.Autocomplete(input, {
      bounds: bounds,
      componentRestrictions: {country: "ca"}
    });
  }
};

Template.secondRequest.helpers({
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

Template.secondRequest.events({
  'click [data-action="showPopup"]': function(event, template) {
    console.log("clicked");
    IonPopup.show({
      title: 'Choose From Map',
      template: 'Please choose a location from Google Map from the device that is given to you.',
      buttons: [{
        text: 'Close me',
        type: 'button-positive',
        onTap: function() {
          IonPopup.close();
        }
      }]
    });
  }
});