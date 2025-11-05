
var app = angular.module('myApp', []);

var MainController = function ($scope, $http) {

    /*var person = {
     firstName: 'James',
     lastName: 'Wang',
     imageSrc: 'http://odetocode.com/images/scott_allen_2.jpg'
     };

     $scope.person = person;*/

    var onUserComplete = function (response) {
        $scope.user = response.data;
    };

    var onError = function (reason) {
        $scope.error = "Data error!Jin";
    };

    $http({
        method: 'GET',
        url: 'https://api.github.com/users/robconery'
    }).then(onUserComplete, onError);

    $scope.message = 'Hola! James!!';


};

app.controller('MainController', ['$scope', '$http', MainController]);



