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
  responsive_images: {
    dev: {
      options: {
        engine: 'im',
        sizes: [{
          width: 800 ,
          suffix: 'large',
          quality: 50
        }, {
          width: 600 ,
          suffix: 'medium',
          quality: 50
        }, {
          width: 100 ,
          suffix: 'small',
          quality: 50
        }]
      },
      files: [{
        expand: true,
        src: ['*.{gif,jpg,png,jpeg}'],
        cwd: 'img/',
        dest: 'images_new/'
      }, {
        expand: true,
        src: ['*.{gif,jpg,png,jpeg}'],
        cwd: 'views/images',
        dest: 'views/images_new/'
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
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default tasks.
  grunt.registerTask('default', ['critical','responsive_images','uglify']);
};