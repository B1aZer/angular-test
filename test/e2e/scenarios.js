'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser().navigateTo('#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      //expect(element('[ng-view] p:first').text()).
       // toMatch(/partial for view 1/);
    });

    it('should save input in repeater', function() {
        input('todo.text').enter('1');
        element(':button').click();
        expect(repeater('.todo-list li').count()).toBe(1);
        expect(element('.todo-list li:first h4').text()).toBe('1');
        input('todo.text').enter('2');
        element(':button').click();
        expect(element('.todo-list li:eq(1) h4').text()).toBe('2');
    });

    it('should be persistent', function() {
        input('todo.text').enter('1');
        element(':button').click();
        var count = repeater('.todo-list li').count();
        browser().navigateTo('#/view2');
        browser().navigateTo('#/view1');
        expect(repeater('.todo-list li').count()).toEqual(3);
    });

    it('should be remove ideas', function() {
    });
  });


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2/1');
    });


    it('should render view2 when user navigates to idea', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/This is the partial for 1/);
    });

  });

});
