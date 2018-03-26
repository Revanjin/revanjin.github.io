var githubApp = angular.module('app', ['ui.router']);

githubApp.config(function($stateProvider, $urlRouterProvider){
    var home = {
        name: 'home',
        abstract: true,
        url: '/home',
        component: 'home'
    }
    var test = {
        name: 'test',
        url: '/test',
        component: 'test'
    }
    $stateProvider.state(home).state(test);
    $urlRouterProvider.when('/', '/index.html#!/home');
})