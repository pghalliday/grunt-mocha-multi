module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'mocha-multi',
          reporterOptions: {
            Progress:{ 
              stdout:"mocha-multi.out",
              options: {
                verbose: true
              }
            },
            spec: {
              stdout:"-"
            }
          }
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

};
