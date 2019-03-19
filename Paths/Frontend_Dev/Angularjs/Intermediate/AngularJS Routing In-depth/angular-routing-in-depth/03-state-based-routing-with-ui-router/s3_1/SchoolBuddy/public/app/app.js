(function() {

    var app = angular.module('app', ['ui.router']);

    app.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {

        $logProvider.debugEnabled(true);

        $stateProvider
        	.state('home', {
        		url: '/',
        		templateUrl: '/app/templates/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
        	})

    }]);

}());