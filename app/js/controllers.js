'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', ['$scope', function($scope) {
        $scope.todos = [];

        $scope.addTodo = function () {
            $scope.todos.push($scope.todo.text);
            $scope.todo.text = '';
        };

    }])
    .controller('MyCtrl2', [function() {

}]);
