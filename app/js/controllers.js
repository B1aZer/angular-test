'use strict';

/* Controllers */

var cs = function (name) {
    return name.toLowerCase()
    .replace(/ /g,'-')
    .replace(/[^\w-]+/g,'');
};                      

angular.module('myApp.controllers', ['LocalStorageModule']).
    controller('MyCtrl1', ['$scope','localStorageService', function($scope, localStorageService) {
        var todos = localStorageService.get('todos');
        $scope.todos = todos || [];

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo.text);
            localStorageService.add('todos',$scope.todos);
            $scope.todo.text = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
            localStorageService.add('todos',$scope.todos);
        }; 

        $scope.createSlug = cs; 
    }])
    .controller('MyCtrl2', ['$scope','localStorageService', '$routeParams', function($scope, localStorageService, $routeParams ) {

        var getByName = function (arr, name) {
            var i=0, len = arr.length;
            for (; i < len; i++) {
                if ( cs(arr[i]) == name ) {
                    return arr[i];
                }
            }
            return null;

        };

        var todos = localStorageService.get('todos');
        $scope.todos = todos || [];
        $scope.todo = getByName( todos, $routeParams.ideaname);

}]);
