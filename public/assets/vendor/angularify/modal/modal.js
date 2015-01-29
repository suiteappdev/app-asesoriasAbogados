'use strict';

angular.module('modalModule', [])

.directive('modal', function () {
    return {
        restrict: "E",
        replace: true,
        transclude: true,
        scope: {
            model: '=ngModel'
        },
        template: "<div class=\"ui dimmer page\" ng-class=\"{ active: model }\">" + 
                    "<div class=\"ui test modal transition visible\" style=\"margin-top: -189px;\"  ng-transclude>" +
                    "</div>" +
                  "</div>"
    }
});
