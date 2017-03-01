var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    path = require('path'),
    root = __dirname,
    port = process.env.port || 8000,
    session = require("express-session"),
    app = express();

app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
app.use(bodyParser.json());
app.use(session({secret: 'benis_something_2_2_k', resave: false, saveUninitialized: true,}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port, function(){
  console.log(`listening on port ${ port }`)
})
