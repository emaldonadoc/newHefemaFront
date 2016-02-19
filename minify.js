/**
 * Created by emmanuelmaldonado on 09/07/15.
 */
var compressor = require('node-minify');

new compressor.minify({
    type: 'uglifyjs',
    fileIn: 'build.js',
    fileOut: './release/build-min.js',
    callback: function(err, min){
        if(!err){
          console.log("BUILD FILE HAS BEEN MINIFIED!! :)");
        } else{
          console.log(["AN ERROR OCCURRED WHEN TRY TO MINIFY BUILD, :(" , err] );
        }
    }
});
