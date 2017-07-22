angular.module('starter.services', [])

.factory('Places', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var places = [{
    id: 0,
    city: 'Caloocan City',
    barangay: 'Baragay 103',
    address: '9th Avenue corner 8th Street, Grace Park, Caloocan City'
  }, {
    id: 1,
    city: 'Caloocan City',
    barangay: 'Baragay 103',
    address: '9th Avenue corner 8th Street, Grace Park, Caloocan City'
  }, {
    id: 2,
    city: 'Caloocan City',
    barangay: 'Baragay 103',
    address: '9th Avenue corner 8th Street, Grace Park, Caloocan City'
  }, {
    id: 3,
    city: 'Caloocan City',
    barangay: 'Baragay 103',
    address: '9th Avenue corner 8th Street, Grace Park, Caloocan City'
  }, {
    id: 4,
    city: 'Caloocan City',
    barangay: 'Baragay 103',
    address: '9th Avenue corner 8th Street, Grace Park, Caloocan City'
  }];

  return {
    all: function() {
      return places;
    },
    remove: function(place) {
      chats.splice(chats.indexOf(place), 1);
    },
    get: function(placeId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(placeId)) {
          return places[i];
        }
      }
      return null;
    }
  };
});
