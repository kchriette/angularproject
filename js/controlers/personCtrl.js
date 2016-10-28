'use strict'
angular.module("appName")
    .controller("personCtrl",["$scope",function($scope){
       
         // creating model for person form
        $scope.personModel={
            firstName:"",
            lastName:"",
            address:"",
            phoneNumber:"",
        };
        
        $scope.forNgShow = true;
        $scope.forNgIf = true;
        
        $scope.toggleForShow = function(){
            $scope.forNgShow = !$scope.forNgShow;
         
            
        }
       
        $scope.toggleForIf = function(){
           $scope.forNgIf = !$scope.forNgIf;
        }
        
         $scope.personModel.firstName="john";
         $scope.personModel.lastName="doe";
         $scope.personModel.address="some address";
         $scope.personModel.phoneNumber="2515865247";
    }]);