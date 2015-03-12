angular.module('ragoddy-marvel.controllers', [])

.controller('CharactersCtrl', function($scope, $rootScope, CharactersService) {

	console.log("controller personajes");

	$scope.personajes = [];

	//llamado a servicio donde esta el json
    CharactersService.getData().success(function(response){
        
      $scope.personajes = response.data.results;
      console.log("Datos obtenidos correctamente");
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });
})
.controller('CharacterDetailCtrl', function($scope, $stateParams, CharacterDetailService) {
  $scope.character = $stateParams.characterId;
  $scope.character_detail = {};

  console.log("controller character detail");

  //llamado a servicio donde esta el json
    CharacterDetailService.getData($scope.character).success(function(response){
        
      $scope.character_detail = response.data.results;
      console.log("Datos obtenidos correctamente");
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });


})

.controller('ComicsCtrl', function($scope,$rootScope, ComicsService) {
 
  	console.log("controller comics");

	$scope.comics = [];

	//llamado a servicio donde esta el json
    ComicsService.getData().success(function(response){
        
      $scope.comics = response.data.results;
      console.log("Datos obtenidos correctamente");
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });

})

.controller('ComicDetailCtrl', function($scope, $stateParams, ComicsDetailService) {
  $scope.comic = $stateParams.comicId;
  $scope.comic_detail = {};

  console.log("controller comics detail");

  //llamado a servicio donde esta el json
    ComicsDetailService.getData($scope.comic).success(function(response){
        
      $scope.comic_detail = response.data.results;
      console.log("Datos obtenidos correctamente" + response.data.results);
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });


})
.controller('EventsCtrl', function($scope, EventsService) {

  console.log("controller Events");
  
  $scope.events = [];

  //llamado a servicio donde esta el json
    EventsService.getData().success(function(response){
        
      $scope.events = response.data.results;
      console.log("Datos obtenidos correctamente");
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });


})
.controller('EventDetailCtrl', function($scope, $stateParams, EventDetailService) {
  
  $scope.events = $stateParams.eventId;
  $scope.event_detail = {};

  console.log("controller event detail");

  //llamado a servicio donde esta el json
    EventDetailService.getData($scope.events).success(function(response){
        
      $scope.event_detail = response.data.results;
      console.log("Datos obtenidos correctamente");
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });


});
