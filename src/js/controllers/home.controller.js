function homeController($scope, $http, SERVER){
  $scope.images = [];

  init();

  function init(){
    $http.get(SERVER.URL).then(function(res){
      $scope.images = res.data;
    });
  };

  $scope.deleteMe = function(id){
    $http.delete(SERVER.URL + id).then( function(res){
      $scope.images = $scope.images.filter(function(image){
        return image._id !== id;
      });
    });
  };
}

homeController.$inject = ['$scope', '$http', 'SERVER'];

export { homeController };
