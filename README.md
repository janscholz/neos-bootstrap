# neos-bootstrap
Bootstrap neos integration

# Installation

        composer install


# Template integration
## Section stylesheets
        <f:section name="stylesheets">
                <link id="js-bootstrap-css" rel="stylesheet" href="{f:uri.resource(path: 'Styles/320/bootstrap.min.css', package: 'JanScholz.NeosBootstrap')}" media="all" />
                <link id="js-bootstrap-theme-css" rel="stylesheet" href="{f:uri.resource(path: 'Styles/320/bootstrap-theme.min.css', package: 'JanScholz.NeosBootstrap')}" media="all" />
        </f:section>

## Section bodyScripts
        <f:section name="bodyScripts">
                <!-- jQuery -->
                <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js"
                        integrity="sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc="
                        crossorigin="anonymous"></script>

                <!-- Bootstrap Core JavaScript -->
                <script src="{f:uri.resource(path: 'JavaScript/bootstrap.js', package: 'JanScholz.NeosBootstrap')}"></script>

                <!-- Neos Backend JavaScript -->
                <script src="{f:uri.resource(path: 'JavaScript/backend.js', package: 'JanScholz.NeosBootstrap')}"></script>
        </f:section>


