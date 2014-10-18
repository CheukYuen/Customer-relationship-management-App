/**
 * Created by zlin on 10/15/14.
 */


var myControllerTest = angular.module('myApp', []);


myControllerTest.controller('MyController', function MyController($scope, $http) {
    $http.get('js/data.json').success(function (data) {

        $scope.customers = data;
    });

})


//var myControllerTest = angular.module('myApp', ['ngResource', 'datatables']);
//
//
//myControllerTest.controller('MyController', function MyController($scope, $resource) {
//    $scope.customers = $resource('data.json').query();
//});