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

    app.provider('books', function(constants) {

        this.$get = function() {

            //var appName = 'Book Logger';
            var appName = constants.APP_TITLE;
            //var appDesc = 'Track which books you read.';
            var appDesc = constants.APP_DESCRIPTION;
            //var version = '1.0';
            var version = constants.APP_VERSION;

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


    app.config(function(booksProvider, constants, dataServiceProvider) {

        booksProvider.setIncludeVersionInTitle(true);

        console.log('title from constants service: ' + constants.APP_TITLE);
        console.log(dataServiceProvider.$get);

    });



}());