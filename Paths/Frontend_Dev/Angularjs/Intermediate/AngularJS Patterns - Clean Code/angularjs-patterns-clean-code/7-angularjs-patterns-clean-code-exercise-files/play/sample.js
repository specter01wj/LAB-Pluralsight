
// ngAnnotate samples

    angular
        .module('mymod', [])
        .config(function($routeProvider) { })
        .controller('Ctrl1', /* @ngInject */ function($scope, $timeout) { })
        .controller('Ctrl2', Ctrl2)
        .run(function($log){ });

    function Ctrl2 ($scope, $timeout) { }

    // Won't get proper injection
    function foo1($scope) {}

    // Won't get proper injection
    var bar = function($scope) {}

    foo2 = {
        // Won't get proper injection
        controller: function($http) {},
        // Won't get proper injection
        resolve: {
            data: function(some) {}
        }
    };

    /* @ngInject */
    function foo2($scope) {}

    /* @ngInject */
    var bar2 = function($scope) {}

    foo3 = /*@ngInject*/ {
        controller: function($http) {},
        resolve: {
            data: function(thing) {}
        }
    };
