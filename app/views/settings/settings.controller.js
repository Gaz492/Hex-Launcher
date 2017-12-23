//////////////////////////////////////////////////////////////////////
//  Author: Gareth
//  Date: 23/12/2017
//  Project: curse-downloader - 
//////////////////////////////////////////////////////////////////////
angular.module('hex.settings', [])

    .controller('SettingsController', function ($scope) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });