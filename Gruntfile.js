module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webpack: {
            somename: {
                entry: [
                    './src/js/index.jsx'
                ],
                output: {
                    path: __dirname + "/public",
                    filename: 'bundle.js'
                },
                module: {
                    loaders: [{
                        exclude: /node_modules/,
                        loader: 'babel',
                        query: {
                            presets: ['react', 'es2015', 'stage-1']
                        }
                    }]
                },
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                devServer: {
                    historyApiFallback: true,
                    contentBase: './'
                }
            }

        },

        concat: {
            js: {
                src: [
                    'bundle.js'
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
        autoprefixer: {
            dist: {
                files: {
                    'public/css/final2.css': 'public/css/final.css'
                }
            }
        },
        watch: {
            jsx: {
                files: ['src/**/*.jsx'],
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
                    'public/css/final.min.css': ['public/css/final2.css']
                }
            }
        }
    });
    grunt.registerTask('speak', function() {
        console.log('speak');
    });
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['webpack', 'sass', 'concat', 'autoprefixer', 'uglify', 'cssmin', 'watch']);


};
