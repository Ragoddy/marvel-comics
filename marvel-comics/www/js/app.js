// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ragoddy-marvel', ['ionic', 'ragoddy-marvel.controllers', 'ragoddy-marvel.services', 'angular-md5'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // incluir credenciales suministradas por la api de marvel
    $rootScope.key_public = "f1904c78bf332a33a73b7fc9158eef20"
    $rootScope.key_private = "e8c39517a871489890bba210b50e376cbbb92540"

  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  //Omitir el #/ de las Url
  // $locationProvider.html5Mode(true);


  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.characters', {
    url: '/characters',
    views: {
      'tab-characters': {
        templateUrl: 'templates/tab-characters.html',
        controller: 'CharactersCtrl'
      }
    }
  })
  .state('tab.characters-detail', {
    url: '/characters/:characterId',
    views: {
      'tab-characters': {
        templateUrl: 'templates/detail-character.html',
        controller: 'CharacterDetailCtrl'
      }
    }
  })

  .state('tab.comics', {
      url: '/comics',
      views: {
        'tab-comics': {
          templateUrl: 'templates/tab-comics.html',
          controller: 'ComicsCtrl'
        }
      }
    })
    .state('tab.comics-detail', {
      url: '/comics/:comicId',
      views: {
        'tab-comics': {
          templateUrl: 'templates/detail-comic.html',
          controller: 'ComicDetailCtrl'
        }
      }
    })

  .state('tab.events', {
    url: '/events',
    views: {
      'tab-events': {
        templateUrl: 'templates/tab-events.html',
        controller: 'EventsCtrl'
      }
    }
  })
  .state('tab.events-detail', {
    url: '/events/:eventId',
    views: {
      'tab-events': {
        templateUrl: 'templates/detail-event.html',
        controller: 'EventDetailCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/characters');

});
