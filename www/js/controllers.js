angular.module('starter.controllers', ['ionic', 'jett.ionic.filter.bar', 'ngCordova'])

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


.controller('HireCtrl', ['$scope', '$ionicPopup' , '$cordovaSms',
  function($scope, $ionicPopup, $cordovaSms){
    $scope.showConfirm = function() {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Profile',
      templateUrl: 'templates/popup/profile.html',
      okText: 'Hire!',
      cancelText: 'Back'
    });
    confirmPopup.then(function(res) {
      if(res) {
        $scope.sendSMS();
      } else {
        $scope.showErrorAlert();
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

    $scope.showErrorAlert = function(){
      var alertPopup = $ionicPopup.alert({
        title: 'Error!',
        template: 'Messaged was not send',
        okText: 'Close'
      })

    }

    $scope.sms = {
      number: '09271644978',
      message: 'Hi! I saw your profile and picked as the person that will do a job for me. Reply ASAP for more details!'
    };

    document.addEventListener('deviceready', function(){
      var options = {
        replaceLineBreaks: false,
        android: {
          intent: ''
        }
      };

    $scope.sendSMS = function(){
      $cordovaSms
        .send('09271644978', 'Hi! I saw your profile in Taskoo and picked you as the person who will do a job for me. Reply in this number ASAP for more details! ', options)
        .then(function(){
          $scope.showSuccessAlert();
        }, function(error)
          {
              $scope.showErrorAlert();
      })
    }
    })

  }])
;
