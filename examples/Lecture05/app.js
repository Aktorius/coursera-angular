(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Aktorius";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
