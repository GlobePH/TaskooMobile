angular.module('starter.services', [])

.factory('Places', function($http, $scope, $stateParams) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

  return {
      get: function(workerId) {
        for (var i = 0; i < workers.length; i++) {
          if (workers[i].id === parseInt(workerId)) {
          return  workers[i];
            }
          }
        return null;
        }
  };
});
