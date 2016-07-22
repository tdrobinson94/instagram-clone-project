function homeController($scope, $http, SERVER){
  $scope.images = [];
  $scope.form = 'Likes';
  init();

  function init(){
    $http.get(SERVER.URL).then(function(res){
      $scope.images = res.data;
    });
  };


  $scope.addToLikes = function(image){
    image.likes ++;
    if(image.likes == 1){
      $scope.form = 'Like';
    } else {
      $scope.form ='Likes';
    }
    $http.put(SERVER.URL + image._id, image)
  }

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
