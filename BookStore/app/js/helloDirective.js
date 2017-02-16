var helloDirective = angular.module('HelloDirective',[]);
helloDirective.directive('hello',function(){
	return{
		restrict:'E',
		template:'<div>hello everyone</div>',
		replace:true
	}
});