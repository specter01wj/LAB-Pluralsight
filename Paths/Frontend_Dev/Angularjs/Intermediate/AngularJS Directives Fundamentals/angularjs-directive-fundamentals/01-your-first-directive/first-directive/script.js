// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: 'Luke Skywalker',
    address: {
      street: 'PO Box 123',
      city: 'Secret Rebel Base',
      planet: 'Yavin 4'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ]
  }
});

angular.module('app').directive('userInfoCard', function() {
  return {
    //template: "User info Card!",
    //template: "Name: {{user.name}}",
    templateUrl: "userInfoCard.html",
    restrict: "AE"
    //replace: true
  }
})
