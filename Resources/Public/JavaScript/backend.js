
$(document).ready(function() {

    document.addEventListener('Neos.InspectorPanelOpened', function(event) {
        changeBootstrapPageCSS('640');
    });

    document.addEventListener('Neos.InspectorPanelClosed', function(event) {
        changeBootstrapPageCSS('320');
    });

    document.addEventListener('Neos.FullScreenModeActivated', function(event) {
        changeBootstrapPageCSS('Default');
    });

    document.addEventListener('Neos.FullScreenModeDeactivated', function(event) {
        initBootstrapPageCSS()
    });

    initBootstrapPageCSS();

    function initBootstrapPageCSS() {
        setTimeout(function() {
            if ($(".neos-backend").length > 0) {
                if ($('.neos-inspector-panel-open').length > 0) {
                    changeBootstrapPageCSS('640');
                } else if ($('.neos-full-screen').length > 0) {
                    changeBootstrapPageCSS('Default');
                } else {
                    changeBootstrapPageCSS('320');
                }
            } else {
                initBootstrapPageCSS();
            }
        }, 500);
    }

    function changeBootstrapPageCSS(cssDirectory) {
        var cssDirectories = ['Default', '320', '640'];

        var cssFile = $('#js-bootstrap-css');
        var cssThemeFile = $('#js-bootstrap-theme-css');

        cssDirectories.forEach(function(value) {
            cssFile.attr('href', cssFile.attr('href').replace(value, cssDirectory));
            cssThemeFile.attr('href', cssFile.attr('href').replace(value, cssDirectory));
        });
    }
});