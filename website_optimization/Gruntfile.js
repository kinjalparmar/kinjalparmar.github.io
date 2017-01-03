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
          suffix: '_large',
          quality: 50
        }, {
          width: 600 ,
          suffix: '_medium',
          quality: 50
        }, {
          width: 100 ,
          suffix: '_small',
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
        src: ['*.js', '!*.min.js'],
        dest: 'js/',
        ext: '.min.js'
      }]
    }
  },
  cssmin: {
    my_target: {
      files: [{
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }]
    }
  }
});

  // Load the plugins
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default tasks.
  grunt.registerTask('default', ['critical','responsive_images','uglify','cssmin']);
};