(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope){
    $scope.message = "";
    $scope.dishesList = "";

    $scope.chooseMessage = function (){
      var totalItems = calculateItemsForString ($scope.dishesList);

      if (totalItems == 0){
        $scope.message = "Please enter data first";
      } else if (totalItems <= 3){
        $scope.message = "Enjoy!"
      }else{
        $scope.message = "Too much!";
      }
    };

    function calculateItemsForString (string){
      var items = string.split(",");
      //If the length is 1 check if it is not an empty string
      if (items.length == 1 && items[0] === ""){
        return 0;
      }else{
        return items.length;
      }
    };
  }
})();
