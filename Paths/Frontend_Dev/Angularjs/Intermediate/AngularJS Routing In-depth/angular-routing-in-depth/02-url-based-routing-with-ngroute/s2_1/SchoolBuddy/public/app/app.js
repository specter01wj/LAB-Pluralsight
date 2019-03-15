(function() {

    var app = angular.module('app', ['ngRoute']);

    app.config(['$logProvider', '$routeProvider', function ($logProvider, $routeProvider) {

        $logProvider.debugEnabled(true);

        $routeProvider
        	.when('/', {
        		controller: 'HomeController',
        		controllerAs: 'home',
        		templateUrl: '/app/templates/home.html'
        	})

    }]);

}());