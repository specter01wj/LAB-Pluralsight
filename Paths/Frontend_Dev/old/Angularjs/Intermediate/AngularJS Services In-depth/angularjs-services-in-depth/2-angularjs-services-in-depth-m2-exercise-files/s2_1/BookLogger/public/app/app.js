(function() {

    var app = angular.module('app', []);

    /*app.provider('books', ['constants', function (constants) {

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

        this.$get = function () {

            var appName = constants.APP_TITLE;
            var version = constants.APP_VERSION;

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            var appDesc = constants.APP_DESCRIPTION;

            return {
                appName: appName,
                appDesc: appDesc
            };
        };

    }]);

    app.config(['booksProvider', function (booksProvider) {

        booksProvider.setIncludeVersionInTitle(true);

    }]);*/

    app.provider('books', function() {

        this.$get = function() {

            var appName = 'Book Logger';
            var appDesc = 'Track which books you read.';
            var version = '1.0';

            if (includeVersionInTitle) {
                appName += ' ' + version;
            }

            return {
                appName: appName,
                appDesc: appDesc
            };  

        };

        var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };

    });


    app.config(function(booksProvider) {

        booksProvider.setIncludeVersionInTitle(true);

    });



}());