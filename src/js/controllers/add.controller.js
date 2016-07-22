function AddController($scope, $http, SERVER, $state){

  $scope.addImage = function(image){
    $http.post(SERVER.URL, image).then( function(res){
      $state.go('root.home');
    });
  };

}

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { AddController };
