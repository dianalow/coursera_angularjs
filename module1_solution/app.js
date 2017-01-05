(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject=['$scope'];

function LunchCheckController($scope){
  $scope.items = "";
  $scope.sayMessage = "";

  $scope.calculateLunches = function () {
    var count=0;
    var items = $scope.items.split(",");

    for (var x in items){
      if(items[x].length!=0){
        count +=1;
      }
    }

    if(count==0){
      $scope.sayMessage = "Please enter data first"
    } else if (count<=3) {
      $scope.color="color:green"
      $scope.sayMessage = "Enjoy!"
    } else {
      $scope.color="color:red"
      $scope.sayMessage = "Too much!"
    }
    //console.log(count);
  }



}
})();
