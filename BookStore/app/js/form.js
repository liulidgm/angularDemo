var userInfoModule = angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfor={
		email:'2390425045@qq.com',
		password:'12345678',
		autoLogin:true

	}
	$scope.getFormData = function(){
		console.log($scope.userInfor);
	}
	$scope.setFormData = function(){
		$scope.userInfor={
			email:'wyd396@163.com',
			password:'qwerty',
			autoLogin:false
		}
	}
	$scope.resetFormData = function(){
		$scope.userInfor={
		email:'2390425045@qq.com',
		password:'12345678',
		autoLogin:true

	}
	}
}]);
