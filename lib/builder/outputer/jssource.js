var path = require( 'path' );

function output( data, file, baseDir, outputDir ) {
    var outputFile = path.resolve( 
        outputDir, 
        path.relative( baseDir, file )
            .replace( /^src/, 'asset' )
    );

    require( 'mkdirp' ).sync( path.dirname( outputFile ) );
    require( 'fs' ).writeFileSync( outputFile, data, 'UTF-8' );
}

require( '../main' ).addOutputer( 'js', output );