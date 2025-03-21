// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
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
    ],
    level: 0
  }
  $scope.user2 = {
    name: 'Han Solo',
    address: {
      street: 'PO Box 123',
      city: 'Mos Eisley',
      planet: 'Tattoine'
    },
    friends: [
      'Han',
      'Leia',
      'Chewbacca'
    ],
    level: 1
  }
  
});

angular.module('app').directive('stateDisplay', function() {
  return {
    link: function(scope, el, attrs) {
      var parms = attrs['stateDisplay'].split(' ');
      var linkVar = parms[0];
      var classes = parms.slice(1);
      
      scope.$watch(linkVar, function(newVal) {
        //el.css('background-color', parms[newVal + 1]);
        el.removeClass(classes.join(' '));
        el.addClass(classes[newVal]);
      });
    }
  }
})

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {
      $scope.collapsed = ($scope.initialCollapsed === 'true');
      $scope.nextState = function() {
        $scope.user.level++;
        $scope.user.level = $scope.user.level % 4;
      }
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
      
      $scope.removeFriend = function(friend) {
        var idx = $scope.user.friends.indexOf(friend);
        if(idx > -1) {
          $scope.user.friends.splice(idx, 1);
        }
      }
    }
  }
});

angular.module('app').directive('removeFriend', function() {
  return {
    restrict: 'E',
    templateUrl: 'removeFriend.html',
    scope: {
      notifyParent: '&method'
    },
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      }
      $scope.cancelRemove = function() {
        $scope.removing = false;
      }
      $scope.confirmRemove = function() {
        $scope.notifyParent();
      }
      
    }
  }
})

angular.module('app').directive('address', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'address.html',
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      }
      $scope.expandAddress = function() {
        $scope.collapsed = false;
      }
    }
  }
})












