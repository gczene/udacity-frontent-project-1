module.exports = function (grunt) {
  'use strict';
  var target = grunt.option('target') || 'develop';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    clean: ['./dist'],
    replace: {
      main: {
        options: {
          patterns: grunt.file.readJSON('./config/grunt/replace-' + target + '.json')
        },
        files: [{
          expand: false,
          src: ['./app/index.html'],
          dest: './dist/index.html'
        }]
      }
    },
    nodestatic: {
      server: {
        options: {
          port: 8080,
          base: './dist'
        }
      }
    },
    watch: {
      replace: {
        files: ['./app/index.html'],
        tasks: ['replace']
      }
    },
    copy: {
      main: {
        files: grunt.file.readJSON('./config/grunt/copy-' + target + '.json')
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-nodestatic');
  grunt.loadNpmTasks('grunt-contrib-copy');


  // Default task(s).
  grunt.registerTask('develop', [
    'clean',
    'replace',
    'copy',
    'nodestatic',
    'watch'
  ]);

};
