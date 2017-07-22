angular.module('starter.controllers', ['ionic', 'jett.ionic.filter.bar'])

.controller('HomeCtrl', function($scope) {})

.controller('JobsCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


})

.controller('PlaceCtrl', ['$http', '$scope', '$state', '$ionicFilterBar',
function($http, $scope, $state, $ionicFilterBar){
  $http.get('js/places.json')
    .success(function(data){
      $scope.places = data.places;
    });
  $http.get('js/caloocan.json')
    .success(function(data){
      $scope.caloocans = data.caloocans;
    });
  $http.get('js/mandaluyong.json')
    .success(function(data){
      $scope.mandaluyongs = data.mandaluyongs;
    })
  $http.get('js/manila.json')
    .success(function(data){
      $scope.manila = data.manila;
    })
  $http.get('js/marikina.json')
    .success(function(data){
      $scope.marikina = data.marikina;
    })
  $http.get('js/pasay.json')
    .success(function(data){
      $scope.pasay = data.pasay;
    })
  $http.get('js/pasig.json')
    .success(function(data){
      $scope.pasig = data.pasig;
    })
  $http.get('js/qc.json')
    .success(function(data){
      $scope.qc = data.qc;
    })
  $http.get('js/sanjuan.json')
    .success(function(data){
      $scope.sanjuan = data.sanjuan;
    })
  $http.get('js/taguig.json')
    .success(function(data){
      $scope.taguig = data.taguig;
    })
}])


.controller('HireCtrl', ['$scope', '$ionicPopup',
  function($scope, $ionicPopup){
    $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Profile',
      templateUrl: 'templates/popup/profile.html',
      okText: 'Hire!',
      cancelText: 'Back'
    });
    confirmPopup.then(function(res) {
      if(res) {
        $scope.showSuccessAlert();
      } else {
        console.log('You are not sure');
      }
    });
  }

    $scope.showSuccessAlert = function(){
      var alertPopup = $ionicPopup.alert({
        title: 'Transaction',
        template: 'Messaged sent successfully!',
        okText: 'Close'
      })

    }
  }])
;
