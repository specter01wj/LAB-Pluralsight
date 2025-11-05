// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
    name: 'Luke',
    selected: false
  }
});

angular.module('app').directive('userTile', function() {
  return {
    restrict: 'E',
    scope: {
      user: '='
    },
    /*controller: function($scope) {
      $scope.select = function() {
        $scope.user.selected = !$scope.user.selected;
      }
    },*/
    templateUrl: 'userTile.html'
  }
});

angular.module('app').directive('userClickSelect', function() {
  return {
    link: function(scope, el, attrs) {
      el.on('click', function() {
        scope.user.selected = !scope.user.selected;
        scope.$apply();
      })
    }
  }
})

