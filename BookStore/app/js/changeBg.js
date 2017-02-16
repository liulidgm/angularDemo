var changeBgModule = angular.module('ChangeBgModule',[]);
changeBgModule.controller('ChangeBgController',['$scope',function($scope){
	$scope.bgColor = 'text-bg-red';
	$scope.getBgGreen = function(){
		$scope.bgColor = 'text-bg-green';
	}
}]);

changeBgModule.controller('NgClassController',['$scope',function($scope){
	$scope.isError = false;
	$scope.isWarning = false;
	$scope.showError = function(){
		$scope.msgText = "This is error."
		$scope.isError = true;
		$scope.isWarning = false;

	}
	$scope.showWarning = function(){
		$scope.msgText = "This is error."
		$scope.isError = false;
		$scope.isWarning = true;

	}
}]);
changeBgModule.controller('NgshowController',['$scope',function($scope){
	$scope.menuState = {show:false}
	$scope.showMenu = function(){
		$scope.menuState.show = !$scope.menuState.show;
	}
}]);