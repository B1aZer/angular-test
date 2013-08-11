'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

    beforeEach(module('myApp.controllers'));

    describe('MyCtrl1', function() {

        var scope, ctrl;

        beforeEach(inject(function($rootScope, $controller) {

            scope = $rootScope.$new();

            ctrl = $controller('MyCtrl1', {$scope: scope});

        }));

        it('should save input value', inject(function() {
            expect(scope.todos).toEqual(undefined);
        }));

        it('should ....', inject(function() {
        }));

    });
});
