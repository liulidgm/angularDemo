var myModule = angular.module('DirectiveScope',[]);

myModule.controller('myCtrl',['$scope',function($scope){
	$scope.ctrlFlavor = '雪花'
}]);
myModule.controller('myCtrl2',['$scope',function($scope){
	$scope.ctrlFlavor = '雪花'
}]);
myModule.controller('myCtrl3',['$scope',function($scope){
	$scope.sayHello = function(name){
		alert('Hello '+name);
	}
}]);


myModule.directive('greeting',function(){
	return{
		restrict:'E',
		scope:{
			greet:'&'
		},
		template:'<input type="text" ng-model="userName"/><br/>
				<button ng-click="greet({name:userName})">sayHello</button><br/>'
	}
});
myModule.directive('drink',function(){
	return{
		restrict:'E',
		scope:{
			flavor:'='
		},
		template:'<input type="text" ng-model="flavor"/>'
		// template:'<div>{{flavor}}</div>'
		/*,
		link:function(scope,element,attrs){
			scope.flavor = attrs.flavor;
		}*/
	}
});

myModule.directive('hello',function(){
	return{
		restrict:'E',
		scope:{},
		template:'<div><input type="text" ng-model = "user.name"/>{{user.name}}</div>',
		replace:true
	}
});