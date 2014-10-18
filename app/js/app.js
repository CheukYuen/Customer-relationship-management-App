'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);

//var myApp = angular.module('myApp', [
//    'ngRoute',
//    'artistControllers'
//]);
//
//myApp.config(['$routeProvider', function ($routeProvider) {
//    $routeProvider.
//        when('/list', {
//            templateUrl: 'Dashboard/default.html',
//            controller: 'ListController'
//        }).
//        otherwise({
//            redirectTo: '/list'
//        });
//}]);