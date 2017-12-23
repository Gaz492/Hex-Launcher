//////////////////////////////////////////////////////////////////////
//  Author: Gareth
//  Date: 23/12/2017
//  Project: curse-downloader - 
//////////////////////////////////////////////////////////////////////

angular.module('hex.myPacks', [])

    .controller('MyPacksController', function ($scope) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });