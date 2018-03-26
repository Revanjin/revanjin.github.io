var githubApp = angular.module('app', ['ui.router']);

githubApp.config(function($stateProvider, $urlRouterProvider){
    var home = {
        name: 'home',
        url: '/home',
        component: 'home'
    }
    var uiRouter = {
        name: 'uiRouter',
        url: '/uiRouter',
        component: 'uiRouter'
    }
    $stateProvider.state(home).state(uiRouter);
    $urlRouterProvider.otherwise('/home');
})