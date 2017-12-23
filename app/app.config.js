//////////////////////////////////////////////////////////////////////
//  Author: Gareth
//  Date: 23/12/2017
//  Project: curse-downloader - 
//////////////////////////////////////////////////////////////////////
let modpacksUrl = "https://cursemeta.dries007.net/raw_modpacks.json";
angular.module('hex.config', ['ngRoute'])

.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'MyPacksController',
    }).when('/ftbPacks', {
        templateUrl: 'views/ftbPacks/ftbPacks.html',
        controller: 'FTBPacksController',
        map: 'ftbPacks'
    }).when('/allPacks', {
        templateUrl: 'views/allPacks/allPacks.html',
        controller: 'AllPacksController',
        map: 'allPacks'
    }).when('/packSettings', {
        templateUrl: 'views/packSettings/index.html',
        controller: 'PackSettingsController',
        map: 'packSettings'
    }).when('/settings', {
        templateUrl: 'views/settings/settings.html',
        controller: 'SettingsController',
        map: 'settings'
    })
});