'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'dataTableControllers',
    'myApp.view1'

]);


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/dashboard', {
            templateUrl: 'view/dashboard.html',
            controller: 'dataTableControllers'
        }).when('/contacts', {
            templateUrl: 'view/contacts.html',
            controller: 'dataTableControllers'
        }).when('/leads', {
            templateUrl: 'view/leads.html',
            controller: 'dataTableControllers'
        }).when('/about', {
            templateUrl: 'view/about.html',
            controller: 'dataTableControllers'
        }).when('/login', {
            templateUrl: 'view/login.html',
            controller: 'dataTableControllers'
        }).otherwise({redirectTo: '/dashboard'});
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