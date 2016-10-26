module.exports = function(grunt) {

    var breakpoints = [480, 768, 992, 1200];
    var neosNavigatePanelWidth = 320;
    var neosInpectorPanelWidth = 320;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/js',
                        src: ['**'],
                        dest: 'Resources/Public/JavaScript/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/fonts',
                        src: ['**'],
                        dest: 'Resources/Public/Fonts/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/css',
                        src: ['**'],
                        dest: 'Resources/Public/Styles/Default',
                        filter: 'isFile'
                    }
                ]
            },
            css320: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/css',
                        src: ['**'],
                        dest: 'Resources/Public/Styles/320',
                        filter: 'isFile'
                    }
                ],
                options: {
                    process: function (content, srcpath) {
                        breakpoints.forEach(function (breakpoint) {
                            var regExp1 = new RegExp(breakpoint, 'g');
                            var regExp2 = new RegExp(breakpoint - 1, 'g');

                            content = content.replace(regExp1, breakpoint + neosNavigatePanelWidth)
                                .replace(regExp2, breakpoint - 1 + neosNavigatePanelWidth);

                        });

                       return content;
                    }
                }
            },
            css640: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/bootstrap/dist/css',
                        src: ['**'],
                        dest: 'Resources/Public/Styles/640',
                        filter: 'isFile'
                    }
                ],
                options: {
                    process: function (content, srcpath) {
                        breakpoints.forEach(function (breakpoint) {
                            var regExp1 = new RegExp(breakpoint, 'g');
                            var regExp2 = new RegExp(breakpoint - 1, 'g');

                            content = content.replace(regExp1, breakpoint + neosNavigatePanelWidth + neosInpectorPanelWidth)
                                .replace(regExp2, breakpoint - 1 + neosNavigatePanelWidth + neosInpectorPanelWidth);

                        });

                        return content;
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['copy:main', 'copy:css320', 'copy:css640']);
};