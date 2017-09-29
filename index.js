const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');

const controller = require('./controller');
require('dotenv').config();

const app = express();
massive(process.env.CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance);
});

// app.use(express.static(__dirname+'/build')) < For when you have your build files created later on (Run npm build and then copy the build directory into this directory). Yay!

app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes/', controller.getPlanes);
app.post('/api/planes', controller.addPlane);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );
