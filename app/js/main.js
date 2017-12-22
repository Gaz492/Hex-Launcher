(function () {
    const remote = window.nodeRequire('electron').remote;

    function init() {
        document.getElementById("min-btn").addEventListener("click", function (e) {
            const window = remote.getCurrentWindow();
            window.minimize();
        });

        document.getElementById("close-btn").addEventListener("click", function (e) {
            const window = remote.getCurrentWindow();
            window.close();
        });
    }

    document.onreadystatechange = function () {
        if (document.readyState === "complete") {
            init();
        }
    };
})();

let app = angular.module('hexLauncher', ['ngRoute']);
let modpacksUrl = "https://cursemeta.dries007.net/raw_modpacks.json";

app.config(function ($routeProvider){
   $routeProvider.when('/', {
       templateUrl: 'views/index.html'
   }).when('/ftbPacks', {
       templateUrl: 'views/ftbPacks/index.html',
       controller: 'FTBPacksController'
   }).when('/allPacks', {
       templateUrl: 'views/allPacks/index.html',
       controller: 'AllPacksController'
   }).when('/packSettings', {
       templateUrl: 'views/packSettings/index.html',
       controller: 'PackSettingsController'
   }).when('/settings', {
       templateUrl: 'views/settings/index.html',
       controller: 'SettingsController'
   })
});

app.controller('FTBPacksController', function ($scope, $http) {
    $scope.ftbPacks = [];
    $http({
        method: 'GET',
        url: modpacksUrl
    }).then(function successCallback(response) {
        let data = response.data.Data;
        angular.forEach(data, function(pack){
            if(pack.PrimaryAuthorName === "FTB"){
                let packAttatchments = {};
                angular.forEach(pack.Attachments, function(attachments){
                    if(attachments.IsDefault === true){
                        packAttatchments = attachments
                    }
                });
                $scope.ftbPacks.push({name: pack.Name, image: packAttatchments.ThumbnailUrl, summary: pack.Summary});
            }
        });
    })
});
app.controller('AllPacksController', function ($scope, $http) {
    $scope.packs = [];
    $http({
        method: 'GET',
        url: modpacksUrl
    }).then(function successCallback(response) {
        let data = response.data.Data;
        angular.forEach(data, function(pack){
            let packAttatchments = {};
            angular.forEach(pack.Attachments, function(attachments){
                if(attachments.IsDefault === true){
                    packAttatchments = attachments
                }
            });
            $scope.packs.push({name: pack.Name, image: packAttatchments.ThumbnailUrl, summary: pack.Summary});
        });
    }, function errorCallback(response) {
        throw response
    });
});