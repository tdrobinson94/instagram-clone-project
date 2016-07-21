function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('root', {
    abstract: true,
    templateUrl: 'templates/layout.tpl.html'

  })

  .state('root.home', {
    url: '/',
    templateUrl: 'templates/home.tpl.html'

  })

  .state('root.detail', {
    url: '/detail',
    templateUrl: 'templates/detail.tpl.html'

  })

  .state('root.edit', {
    url: '/edit',
    templateUrl: 'templates/edit.tpl.html'

  })

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider']
export { config };
