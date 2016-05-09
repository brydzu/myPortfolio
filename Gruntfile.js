module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: [
                    'src/js/app.js'
                ],
                dest: 'public/js/final.js'

            },
            css: {
                src: [
                    'public/css/main.css'

                ],
                dest: 'public/css/final.css'
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'public/css/main.css': 'src/scss/main.scss' // 'destination': 'source'
                }
            }
        },
        watch: {
            ts: {
                files: ['src/js/**/*.ts'],
                tasks: ['default']
            },
            js: {
                files: ['src/**/*.js'],
                tasks: ['default']
            },
            css: {
                files: ['public/css/**/*.css'],
                tasks: ['default']
            },
            sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['default']
            }
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false,
                compress: {
                    unused: false,
                    drop_console: true
                }
            },
            js: {
                src: ['public/js/final.js'],
                dest: 'public/js/final.min.js'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
                'processImport': false
            },
            target: {
                files: {
                    'public/css/final.min.css': ['public/css/final.css']
                }
            }
        }
    });
    grunt.registerTask('speak', function() {
        console.log('speak');
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-ts");

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'watch']);


};
