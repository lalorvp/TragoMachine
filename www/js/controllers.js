angular.module('starter.controllers', [])

.controller('AppCtrl', 
  function($scope, $window, $state) {

    $scope.$on('$ionicView.loaded', function(){
    
    console.log('cargo');
  });



  $scope.preparar = function(intensidad, ocacion, dificultad){
    console.log('intensidad: ' + intensidad);
  }

})

;
