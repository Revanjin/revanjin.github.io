var githubApp = angular.module('app', ['ui.router']);

githubApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'components/home.html'
    })
    $stateProvider
        .state('uiRouter', {
            url: '/uiRouter',
            templateUrl: 'components/uiRouter.html'
        })
    $urlRouterProvider.otherwise('/home');
})