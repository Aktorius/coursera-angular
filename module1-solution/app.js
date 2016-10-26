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
        $scope.textStyle = {
          "color" : "#F00"
        }
        $scope.inputTextStyle = {
          "border-color" : "#F00"
        }
      } else if (totalItems <= 3){
        $scope.message = "Enjoy!"
        $scope.textStyle = {
          "color" : "#3C3"
        }
        $scope.inputTextStyle = {
          "border-color" : "#3C3"
        }
      }else{
        $scope.message = "Too much!";
        $scope.textStyle = {
          "color" : "#3C3"
        }
        $scope.inputTextStyle = {
          "border-color" : "#3C3"
        }
      }
    };

    function calculateItemsForString (string){
      var items = string.split(",");
      var count = 0;

      for (var i=0; i<items.length; i++){
        if (items[i].trim() !== ""){
          count ++
        }
      }
      return count;
    };
  }
})();
