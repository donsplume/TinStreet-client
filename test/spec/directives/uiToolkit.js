'use strict';

describe('Directive: uiToolkit', function () {

  // load the directive's module
  beforeEach(module('tradingMagicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ui-toolkit></ui-toolkit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the uiToolkit directive');
  }));
});
