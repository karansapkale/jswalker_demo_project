'use strict';
  module.exports = function(grunt) {
      grunt.initConfig({
          uglify:{
            build:{
                    files: [{
                              src: 'app/public/script/*.js',  // source files mask
                              dest: 'app/public/script/minify/',    // destination folder
                              expand: true,    // allow dynamic building
                              flatten: true,   // remove all unnecessary nesting
                              extDot:true,
                              ext: '.js'   // replace .js to .min.js
                    }]
            }
          },
          cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'app/public/style/',
                src: ['*.css', '!*.min.css'],
                dest: 'app/public/style/minify/',
                ext: '.css'
              }]
            }
          }
      });

      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      
      grunt.registerTask('default', ['uglify','cssmin']);

};
