let express = require( 'express' );
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );

// var previewvideo = document.querySelector("#preview-video");
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
//     navigator.mediaDevices.getUserMedia({video: true, audio: {echoCancellation: true}}).then((stream) => {
//     previewvideo.srcObject = stream;
//     previewvideo.play();
//     });
// }

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.get( '/', ( req, res ) => {
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );

server.listen( 3000 );
