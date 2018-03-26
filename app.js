var githubApp = angular.module('app', ['ui.router']);

githubApp.config(function($stateProvider){
    var home = {
        name: 'home',
        url: '/home',
        component: 'home'
    }
    var test = {
        name: 'test',
        url: '/test',
        component: 'test'
    }
    $stateProvider.state(home).state(test);
})