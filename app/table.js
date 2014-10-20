var app = angular.module('myApp', ['ui.grid']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.gridOptions = {  };

    $scope.gridOptions.columnDefs = [
        {name:'id'},
        {name:'name'},
        {field:'age'}, // showing backwards compatibility with 2.x.  you can use field in place of name
        {name: 'address.city'},
        {name: 'age again', field:'age'},
        {name: 'address.state'}
    ];

    $http.get('https://rawgit.com/angular-ui/ui-grid.info/gh-pages/data/10000_complex.json')
        .success(function(data) {
            $scope.gridOptions.data = data;
        });
}]);