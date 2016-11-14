
$(document).ready(function() {

    document.addEventListener('Neos.InspectorPanelOpened', function(event) {
        initBootstrapPageCSS(0);
    });

    document.addEventListener('Neos.InspectorPanelClosed', function(event) {
        initBootstrapPageCSS(0);
    });

    document.addEventListener('Neos.FullScreenModeActivated', function(event) {
        initBootstrapPageCSS(0);
    });

    document.addEventListener('Neos.FullScreenModeDeactivated', function(event) {
        initBootstrapPageCSS(0);
    });

    document.addEventListener('Neos.NavigatePanelOpened', function(event) {
        initBootstrapPageCSS(0);
    });

    document.addEventListener('Neos.NavigatePanelClosed', function(event) {
        initBootstrapPageCSS(0);
    });

    initBootstrapPageCSS(500);

    function initBootstrapPageCSS(timeout) {
        setTimeout(function() {
            if ($('.neos-backend').length > 0) {
                if ($('body').hasClass('neos-full-screen')) {
                    changeBootstrapPageCSS('Default');
                } else if ($('body').hasClass('neos-navigate-panel-open') && $('body').hasClass('neos-inspector-panel-open')) {
                    changeBootstrapPageCSS('640');
                } else if ($('body').hasClass('neos-navigate-panel-open') || $('body').hasClass('neos-inspector-panel-open')) {
                    changeBootstrapPageCSS('320');
                    console.log('320');
                } else {
                    changeBootstrapPageCSS('Default');
                }
            } else {
                initBootstrapPageCSS();
            }
        }, timeout);
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