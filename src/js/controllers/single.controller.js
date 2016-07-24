function SingleController($scope, $stateParams, $http, SERVER){

  $scope.singleImage = {};
  $scope.form = 'Likes';
  init();

  function init(){

    $http.get(SERVER.URL + $stateParams.id).then(function(res){
      $scope.singleImage = res.data;

    });
  };

  $scope.addToSingleLikes = function(image){
    singleImage.likes ++;
    if(singleImage.likes == 1){
      $scope.form = 'Like';
    } else {
      $scope.form ='Likes';
    };
  };

}

SingleController.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];

export { SingleController };
