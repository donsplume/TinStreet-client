'use strict';

describe('Directive: instrumentPicker', function () {

  // load the directive's module
  beforeEach(module('tradingMagicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<instrument-picker></instrument-picker>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the instrumentPicker directive');
  }));
});
