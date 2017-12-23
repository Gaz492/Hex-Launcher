(function ($) {
    const remote = window.nodeRequire('electron').remote;
    $.fn.minimizeWindow = function () {
        const window = remote.getCurrentWindow();
        window.minimize();
    };
    $.fn.closeWindow = function () {
        const window = remote.getCurrentWindow();
        window.close();
    };
})(jQuery);

angular.module('hexLauncher', ['ngRoute', 'infinite-scroll', 'hex.myPacks', 'hex.settings', 'hex.config', 'hex.ftbPacks', 'hex.allPacks']);
