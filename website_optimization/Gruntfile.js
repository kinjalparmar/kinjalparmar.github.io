module.exports = function (grunt) {
grunt.initConfig({
  critical: {
    dist: {
      options: {
        base: './'
      },
      // The source file
      src: 'original.html',
      // The destination file
      dest: 'index.html'
      }
    },
  tinyimg: {
    dynamic: {
      files: [{
        expand: true,
        src: ['*.{png,jpg,svg}'],
        cwd: 'img/',
        dest: 'images_new/'
      }, {
        expand: true,
        src: ['*.{png,jpg,svg}'],
        cwd: 'views/images',
        dest: 'images_new/'
      }]
    }
  },
  uglify: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'js/',
        src: '*.js',
        dest: 'js/',
        ext: '.min.js'
      }]
    }
  }
});

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-tinyimg');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default tasks.
  grunt.registerTask('default', ['critical','tinyimg','uglify']);
};