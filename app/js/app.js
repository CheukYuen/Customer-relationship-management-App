'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'dataTableControllers',
    'myApp.view1',
    'myApp.view2'
]);


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/list', {
        templateUrl: 'partials/data-table.html',
        controller: 'dataTableControllers'
    }).otherwise({redirectTo: '/list'});
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