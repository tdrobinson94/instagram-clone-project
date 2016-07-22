function SingleController($scope, $stateParams, $http, SERVER){

  $scope.singleImage = {};

  init();

  function init(){

    $http.get(SERVER.URL + $stateParams.id).then(function(res){
      $scope.singleImage = res.data;

    });
  };

}

SingleController.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];

export { SingleController };
