var myModule = angular.module('DirectiveAndCtrl',[]);

myModule.controller('myCtrl1',['$scope',function($scope){
	$scope.loadData = function(){
		console.log('数据加载中11111。。。。');
	}
}]);
myModule.controller('myCtrl2',['$scope',function($scope){
	$scope.loadData2 = function(){
		console.log('数据加载中22222。。。。');
	}
}]);
myModule.directive('loader',function(){
	return{
		restrict:'E',
		link:function(scope,element,attrs){
			element.bind('mouseenter',function(){
				//scope.loadData();
				//scope.$apply('loadData()');	
				scope.$apply(attrs.howtoload);
			});

		}
	}
});