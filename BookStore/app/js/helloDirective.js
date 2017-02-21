var helloDirective = angular.module('HelloDirective',[]);
helloDirective.directive('hello',function(){
	return{
		restrict:'AEMC',
		template:'<div>hello everyone</div>',
		replace:true
	}
});