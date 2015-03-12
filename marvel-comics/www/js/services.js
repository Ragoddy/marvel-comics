angular.module('ragoddy-marvel.services', [])

.factory('CharactersService', function($http, $rootScope, md5){

  delete $http.defaults.headers.common['X-Requested-With'];

  var keyPublic = $rootScope.key_public;
  var keyPrivate = $rootScope.key_private;
  var ts = new Date().getTime();
  var hash = md5.createHash(ts + keyPrivate + keyPublic);
  var marvelApi = [];

  marvelApi.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/characters',
          params: {
                    "ts": ts,  
                    "apikey": keyPublic,
                    "hash": hash
                  }
       });
   }

   return marvelApi;

})
.factory('CharacterDetailService', function($http, $rootScope, md5) {
  
  delete $http.defaults.headers.common['X-Requested-With'];

  var keyPublic = $rootScope.key_public;
  var keyPrivate = $rootScope.key_private;
  var ts = new Date().getTime();
  var hash = md5.createHash(ts + keyPrivate + keyPublic);
  var marvelApi = [];

  marvelApi.getData = function(id_character) {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/characters/'+id_character,
          params: {
                    "ts": ts,  
                    "apikey": keyPublic,
                    "hash": hash
                  }
       });
   }

   return marvelApi;
  
})
.factory('ComicsService', function($http, $rootScope, md5) {
  
  delete $http.defaults.headers.common['X-Requested-With'];

  var keyPublic = $rootScope.key_public;
  var keyPrivate = $rootScope.key_private;
  var ts = new Date().getTime();
  var hash = md5.createHash(ts + keyPrivate + keyPublic);
  var marvelApi = [];

  marvelApi.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/comics',
          params: {
                    "ts": ts,  
                    "apikey": keyPublic,
                    "hash": hash
                  }
       });
   }

   return marvelApi;
  
})
.factory('ComicsDetailService', function($http, $rootScope, md5) {
  
  delete $http.defaults.headers.common['X-Requested-With'];

  var keyPublic = $rootScope.key_public;
  var keyPrivate = $rootScope.key_private;
  var ts = new Date().getTime();
  var hash = md5.createHash(ts + keyPrivate + keyPublic);
  var marvelApi = [];

  marvelApi.getData = function(id_comic) {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/comics/'+id_comic,
          params: {
                    "ts": ts,  
                    "apikey": keyPublic,
                    "hash": hash
                  }
       });
   }

   return marvelApi;
  
})
.factory('EventsService', function($http, $rootScope, md5){

  delete $http.defaults.headers.common['X-Requested-With'];

  var keyPublic = $rootScope.key_public;
  var keyPrivate = $rootScope.key_private;
  var ts = new Date().getTime();
  var hash = md5.createHash(ts + keyPrivate + keyPublic);
  var limit = 10;
  var marvelApi = [];

  marvelApi.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/events',
          params: {
                    "limit": limit,
                    "ts": ts,  
                    "apikey": keyPublic,
                    "hash": hash
                  }
       });
   }

   return marvelApi;

})

.factory('EventDetailService', function($http, $rootScope, md5) {
  
  delete $http.defaults.headers.common['X-Requested-With'];

  var keyPublic = $rootScope.key_public;
  var keyPrivate = $rootScope.key_private;
  var ts = new Date().getTime();
  var hash = md5.createHash(ts + keyPrivate + keyPublic);
  var marvelApi = [];

  marvelApi.getData = function(id_event) {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/events/'+id_event,
          params: {
                    "ts": ts,  
                    "apikey": keyPublic,
                    "hash": hash
                  }
       });
   }

   return marvelApi;
  
});
