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
        	.state('schools', {
                url: '/schools',
                controller: 'AllSchoolsController',
                controllerAs: 'schools',
                templateUrl: '/app/templates/allSchools.html'
            })
            .state('classrooms', {
                url: '/classrooms',
                controller: 'AllClassroomsController',
                controllerAs: 'classrooms',
                templateUrl: '/app/templates/allClassrooms.html'
            })
            .state('activities', {
                url: '/activities',
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html'
            })

    }]);

}());