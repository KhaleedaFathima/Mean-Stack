angular.module('orderByIpl', [])
.controller('IplController', ['$scope', function($scope) {
  var Ipl = [
    {PlayerName: 'Virat', Team:'RCB', Season: 2020, Runs:400,  Wickets: 0},
    {PlayerName: 'ABD', Team:'RCB',  Season: 2020, Runs:332,  Wickets: 0},
    {PlayerName: 'MS Dhoni', Team:'CSK',  Season: 2020, Runs:440,  Wickets: 0},
    {PlayerName: 'Jadeja', Team:'CSK',   Season: 2020, Runs:200,  Wickets: 10},
    {PlayerName: 'Bumrah',  Team:'MI', Season: 2020, Runs:50,  Wickets: 11}
  ];
 
  $scope.propertyName = 'Runs';
  $scope.reverse = true;
  $scope.Ipl = Ipl;
 
  $scope.sortBy = function(propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };
}]);