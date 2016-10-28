'use strict'
angular.module("appName")
    .controller("appCtrl",["$scope",function($scope){
        $scope.header="hello world";
        $scope.tests = "sample from appC3trl"
        $scope.test=function(){
            $scope.header="oh look it change ";
        }
      
     
    }]);