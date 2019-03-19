(function() {

    var app = angular.module('app', ['ui.router']);

    app.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {

        $logProvider.debugEnabled(true);

    }]);

}());