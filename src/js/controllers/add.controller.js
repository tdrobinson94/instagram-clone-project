function AddController($scope, $http, SERVER, $state){
  $scope.images = [];


  $scope.addImage = function(image){
    image.likes = 0;
    $http.post(SERVER.URL, image).then( function(res){
      $state.go('root.home');
    });
  };

}

AddController.$inject = ['$scope', '$http', 'SERVER', '$state'];
export { AddController };
