
var romeDirective = () => {

    var directive :ng.IDirective = {} ;

    directive.require = '^ngModel';

    directive.restrict = 'EA';

    directive.scope = {
        options: '=',
        ngModel: '=',
    };

    directive.link = (scope : IRomeScope, iElement, iAttrs, ctrl, transclude) => {
        var cal = rome(iElement[0], scope.options);

        cal.on('data', value => {
            scope.ngModel = value;
            scope.$apply();
        });

    }

    return directive;
}

interface IRomeScope extends ng.IScope {
    options;
    ngModel;
}

angular.module('rome', [])
    .directive('datePicker', romeDirective);