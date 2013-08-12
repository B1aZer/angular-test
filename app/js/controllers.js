'use strict';

/* Controllers */

angular.module('myApp.controllers', ['LocalStorageModule']).
    controller('MyCtrl1', ['$scope','localStorageService', function($scope, localStorageService) {
        var todos = localStorageService.get('todos');
        $scope.todos = todos || [];

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo.text);
            localStorageService.add('todos',$scope.todos);
            $scope.todo.text = '';
        };
    }])
    .controller('MyCtrl2', [function() {

}]);
