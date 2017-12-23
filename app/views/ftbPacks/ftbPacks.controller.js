//////////////////////////////////////////////////////////////////////
//  Author: Gareth
//  Date: 23/12/2017
//  Project: curse-downloader - 
//////////////////////////////////////////////////////////////////////

angular.module('hex.ftbPacks', [])

    .controller('FTBPacksController', function ($scope, $http) {
        $scope.isActive = function (route) {
            return route === $location.path();
        };
        $scope.ftbPacks = [];
        $http({
            method: 'GET',
            url: modpacksUrl
        }).then(function successCallback(response) {
            let data = response.data.Data;
            angular.forEach(data, function (pack) {
                if (pack.PrimaryAuthorName === "FTB") {
                    let packAttatchments = {};
                    angular.forEach(pack.Attachments, function (attachments) {
                        if (attachments.IsDefault === true) {
                            packAttatchments = attachments
                        }
                    });
                    $scope.ftbPacks.push({
                        name: pack.Name,
                        image: packAttatchments.ThumbnailUrl,
                        summary: pack.Summary
                    });
                }
            });
        })
    });