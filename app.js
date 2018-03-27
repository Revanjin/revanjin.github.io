var githubApp = angular.module('app', ['ui.router']);

githubApp.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            component: 'home'
    })
    $stateProvider
        .state('uiRouter', {
            url: '/uiRouter',
            component: 'uiRouter'
        })
    $urlRouterProvider.otherwise('/home');
})