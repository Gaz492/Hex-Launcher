//////////////////////////////////////////////////////////////////////
//  Author: Gareth
//  Date: 23/12/2017
//  Project: curse-downloader - 
//////////////////////////////////////////////////////////////////////

angular.module('hex.allPacks', ['infinite-scroll'])

    .controller('AllPacksController', function ($scope, $http) {
        $scope.packs = [];
        $http({
            method: 'GET',
            url: modpacksUrl
        }).then(function successCallback(response) {
            let data = response.data.Data;
            angular.forEach(data, function (pack) {
                let packAttatchments = {};
                angular.forEach(pack.Attachments, function (attachments) {
                    if (attachments.IsDefault === true) {
                        packAttatchments = attachments
                    }
                });
                $scope.packs.push({name: pack.Name, image: packAttatchments.ThumbnailUrl, summary: pack.Summary});
            });
        }, function errorCallback(response) {
            throw response
        });
    });