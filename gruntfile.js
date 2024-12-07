module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                files: {
                    "dist/styles.css": "src/styles.less"
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'dist/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
};
