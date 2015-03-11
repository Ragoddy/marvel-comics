angular.module('ragoddy-marvel.controllers', [])

.controller('PersonajesCtrl', function($scope, PersonajesService) {

	console.log("controller personajes");
	
	$scope.personajes = [];

	//llamado a servicio donde esta el json
    PersonajesService.getData().success(function(response){
        
      $scope.personajes = response;
      console.log("Datos obtenidos correctamente" + response);
      
    }).
    error(function(data, status, headers, config){
      console.log("Error al consumir data ");
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
