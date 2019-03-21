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
                /*resolve: {
                	promise: function() {
                		throw 'error activate classrooms!';
                	}
                }*/
            })
            .state('classroom_summary', {
                url: '/classrooms/:id',
                templateUrl: '/app/templates/classroom.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .state('classroom_detail', {
                url: '/classrooms/{id:[0-9]}/detail/{month}',
                templateUrl: '/app/templates/classroomDetail.html',
                controller: 'ClassroomController',
                controllerAs: 'classroom'
            })
            .state('activities', {
                url: '/activities',
                controller: 'AllActivitiesController',
                controllerAs: 'activities',
                templateUrl: '/app/templates/allActivities.html'
            })

    }]);


    app.run(['$rootScope', '$log', function($rootScope, $log) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        
           $log.debug('successfully changed states');
        
           $log.debug('event', event);
           $log.debug('toState', toState);
           $log.debug('toParams', toParams);
           $log.debug('fromState', fromState);
           $log.debug('fromParams', fromParams);
        });

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

            $log.error('The requested state was not found: ', unfoundState);

        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

            $log.error('An error occurred while changing states: ', error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });

    }]);

}());