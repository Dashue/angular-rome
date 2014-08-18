var romeDirective = function() {

  var directive = {};

  directive.require = '^ngModel';

  directive.restrict = 'EA';

  directive.scope = {
    options: '=',
    ngModel: '=',
  };

  directive.link = function(scope, iElement, iAttrs, ctrl, $parse) {
    var cal = rome(iElement[0], scope.options);

    cal.on('data', function(value) {
       scope.ngModel = value;
       scope.$apply();
    });

  }

  return directive;
}

angular.module('rome', [])
  .directive('datePicker', romeDirective);