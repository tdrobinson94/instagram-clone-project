function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html'

  })

  .state('root.home', {
    url: '/',
    templateUrl: 'templates/home.tpl.html',
    controller: 'homeController'

  })

  .state('root.edit', {
    url: '/edit',
    templateUrl: 'templates/edit.tpl.html',
    controller: 'homeController'

  })

  .state('root.add', {
    url: '/add',
    templateUrl: 'templates/add.tpl.html',
    controller: 'AddController'
  })

  .state('root.single', {
    url: '/image/:id',
    templateUrl: 'templates/single.tpl.html',
    controller: 'SingleController'
  })

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider']
export { config };
