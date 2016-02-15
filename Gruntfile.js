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
      develop: {
        options: {
          mangle: false,
          sourceMap: false,
          beautify: true
        },
        files: {
          './dist/js/output.min.js': [
            'app/**/*.js',
            'tmp/**/*.js'
          ]
        }
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
      },
      html2js: {
        files: ['./app/**/views/**/*.html'],
        tasks: ['html2js', 'uglify']
      },
      scripts: {
        files: ['./app/**/*.js'],
        tasks: ['jslint', 'uglify:' + target]
      }
    },
    copy: {
      main: {
        files: grunt.file.readJSON('./config/grunt/copy-' + target + '.json')
      }
    },
    jslint: {
      client: {
        src: [
          'Gruntfile.js',
          './app/**/*.js'
        ],
        options: {
          errorsOnly: true
        },
        directives: {
          todo: true,
          unparam: true,
          nomen: true,
          node: true,
          indent: 2,
          globals: ['angular']
        }
      }
    },
    html2js: {
      options: {
        // custom options, see below
        base: 'app',
        rename: function (name) {
          return '/' + name;
        },
        quoteChar: '\''
      },
      main: {
        src: ['./app/**/views/**/*.html'],
        dest: 'tmp/templates.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-nodestatic');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-html2js');

  // Default task(s).
  grunt.registerTask('develop', [
    'clean',
    'replace',
    'html2js',
    'uglify',
    'copy',
    'nodestatic',
    'watch'
  ]);

};
