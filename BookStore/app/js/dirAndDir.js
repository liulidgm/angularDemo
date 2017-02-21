 var myModule = angular.module('DirAndDirModule',[]);

 myModule.directive('super',function(){
 	return{
 		scope:{},//独立作用域
 		restrict:'E',
 		controller:function($scope){//$scope范围？？
 			$scope.abilities = [];
 			this.addStrength = function(){
 				$scope.abilities.push('strength');
 			};
 			this.addSpeed = function(){
 				$scope.abilities.push('speed');
 			};
 			this.addLight = function(){
 				$scope.abilities.push('light');
 			}
 		},
 		link:function(scope,element,attrs){
 			element.bind('mouseenter',function(){
 				console.log(scope.abilities);
 			});
 			
 		}
 	}
 });
 myModule.directive('strength',function(){
 	return{
 		require:'^super',
 		link:function(scope,element,attrs,superCtrl){//最后一个参数的名字随便起？
 			superCtrl.addStrength();
 		}
 	}
 });
  myModule.directive('speed',function(){
 	return{
 		require:'^super',
 		link:function(scope,element,attrs,superCtrl){
 			superCtrl.addSpeed();
 		}
 	}
 });
   myModule.directive('light',function(){
 	return{
 		require:'^super',
 		link:function(scope,element,attrs,superCtrl){
 			superCtrl.addLight();
 		}
 	}
 });