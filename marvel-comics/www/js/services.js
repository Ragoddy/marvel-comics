angular.module('ragoddy-marvel.services', [])

.factory('PersonajesService', function($http, md5){

  delete $http.defaults.headers.common['X-Requested-With'];

  var hash = md5.createHash("1" || "e8c39517a871489890bba210b50e376cbbb92540" || "f1904c78bf332a33a73b7fc9158eef20");
  console.log("create hash: "+ hash);

  var marvelApi = [];

  marvelApi.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
          method: 'GET',
          url: 'http://gateway.marvel.com/v1/public/comics',
          params: {"apikey": "f1904c78bf332a33a73b7fc9158eef20",
                   "ts": "1",  
                   "hash": hash
                  }
       });
   }
   
   return marvelApi;
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
