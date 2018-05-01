/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0',
    },
    banner:
      '/*! greendragonbungay.co.uk - v<%= meta.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* https://github.com/euoia/greendragonbungay.co.uk/\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
      'James Pickard; Licensed MIT */\n',
    // Task configuration.
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
      },
      js: {
        src: [
          'wwwroot/lib/jquery/dist/jquery.min.js',
          'wwwroot/lib/flexslider/jquery.flexslider-min.js',
        ],
        dest: 'wwwroot/js/gdb.js',
      },
    },
    cssmin: {
      minify: {
        src: [
          'wwwroot/lib/reset-css/reset.css',
          'wwwroot/lib/bootstrap/dist/css/bootstrap.min.css',
          'wwwroot/lib/flexslider/flexslider.css',
          'wwwroot/lib/fonts/*',
          'wwwroot/css/main.css',
        ],
        dest: 'wwwroot/css/gdb-20180501.css',
      },
    },
    watch: {
      files: ['<%= cssmin.minify.src %>'],
      tasks: ['cssmin'],
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['concat', 'cssmin']);
};
