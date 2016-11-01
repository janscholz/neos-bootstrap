# neos-bootstrap
Bootstrap neos integration. Change dynamically the bootstrap css in neos backend to adjust the breakpoints.

# Installation
    composer install


# Template integration
# ViewHelper Namespace
    {namespace neos=TYPO3\Neos\ViewHelpers}

## Section stylesheets
    <f:section name="stylesheets">
        <link id="js-bootstrap-css" rel="stylesheet" href="{f:uri.resource(path: 'Styles/Default/bootstrap.min.css', package: 'JanScholz.NeosBootstrap')}" media="all" />
        <link id="js-bootstrap-theme-css" rel="stylesheet" href="{f:uri.resource(path: 'Styles/Default/bootstrap-theme.min.css', package: 'JanScholz.NeosBootstrap')}" media="all" />

        <f:if condition="{neos:rendering.inBackend()}">
            <f:then>
                <!-- Neos Backend CSS -->
                <link rel="stylesheet" href="{f:uri.resource(path: 'Styles/Default/backend.css', package: 'JanScholz.NeosBootstrap')}" media="all" />
            </f:then>
        </f:if>
    </f:section>

## Section bodyScripts
    <f:section name="bodyScripts">
        <!-- jQuery -->
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
                integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
                crossorigin="anonymous"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="{f:uri.resource(path: 'JavaScript/bootstrap.min.js', package: 'JanScholz.NeosBootstrap')}"></script>

        <f:if condition="{neos:rendering.inBackend()}">
            <f:then>
                <!-- Neos Backend JavaScript -->
                <script src="{f:uri.resource(path: 'JavaScript/backend.js', package: 'JanScholz.NeosBootstrap')}"></script>
            </f:then>
        </f:if>
    </f:section>


