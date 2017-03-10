module.exports = function(grunt) {

    grunt.initConfig({
        files: ['client/**/*.js', 'customer/**/*.js'],
        jshint: {
            files: '<%=files%>',
            options: {
                devel: true,
                node: true
            }
        },
        watch: {
            files: '<%=files%>',
            tasks: ['jshint']
        },
        targethtml: {
            dist: {
                files: {
                    'dist/index.html': 'template/index.html'
                }
            },
            dev: {
                files: {
                    'client/index.html': 'template/index.html'
                }
            }
        },
        concat: {
            dist: {
                src: [
                    'client/**/*.js', 
                    'customer/client/customer.js', 
                    'customer/client/**/*.js', 
                    '!client/**/*spec.js', 
                    '!customer/client/**/*spec.js'
                ],
                dest: 'dist/mean-training.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/mean-training.min.js': 'dist/mean-training.js'
                }
            }
        },
        ngAnnotate: {
            dist: {
                files: {
                    'dist/mean-training.js' : 'dist/mean-training.js'
                }
            }
        }

    });
    
    grunt.registerTask('dist', ['concat:dist', 'ngAnnotate:dist', 'uglify:dist', 'targethtml:dist']);

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ng-annotate');
};