var app = angular.module("myApp",[]);
app.controller("myController",["$scope","$http",function($scope,$http){
	 var refresh = function(){
		$http.get("/contactList").success(function(response){
			$scope.contactList = response;
			$scope.contact="";
		});
	}
	refresh();
	$scope.addContact = function()
{
	$http.post("/contactList",$scope.contact).success(function(response)
	{
		console.log(response);
		

	})
}

$scope.editContact = function(id)
{
	
	$http.get("/contactList/"+id).success(function(response){

		$scope.contact = response;
		
	})
}
$scope.updateContact = function()
{
	$http.put("/contactList/"+ $scope.contact._id,$scope.contact)
	.success(function(response)
	{
		refresh();
	})
}

$scope.removeContact = function(id)
{
	$http.delete("/contactList/"+ id).success(function(response){
		refresh();
	})

	
}


	/*var person1 ={
name:"suhail",
email:"suhail322@gmail.com",
mobile:"87686868685"
          }
      var person2 ={
name:"hhdgrj",
email:"ffgfdsdf@gmail.com",
mobile:"3543543534"
          }
          var person3 ={
name:"akkuluru",
email:"sdfsdfsdf@gmail.com",
mobile:"756756756"
          }    
var contactList = [person1,person2,person3];
$scope.contactList = contactList;*/
}]);