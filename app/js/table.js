var dataTable = angular.module('dataTableControllers', ['ui.grid']);

dataTable.controller('dataTableControllers', ['$scope', '$http', function ($scope, $http) {
    $scope.gridOptions = {  };

    $scope.gridOptions.columnDefs = [
        {name:'id'},
        {name:'name'},
        {field:'age'}, // showing backwards compatibility with 2.x.  you can use field in place of name
        {name: 'address.city'},
        {name: 'age again', field:'age'},
        {name: 'address.state'}
    ];

    $http.get('js/test.json')
        .success(function(data) {
            $scope.gridOptions.data = data;
        });
}]);