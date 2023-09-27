const express = require('express');
const layouts = require('express-ejs-layouts');
// defining the path
const path = require('path');
// database connection
const db = require('./db/db');
app.listen(port, function(err){
  if(err){
    console.log("Your server is been fired up");
    
  }
  console.log("Your server is been running on port :" + port);
})

app.set('./', './routes/homepage/');
app.get('./', __dirname, 'ejs');
// the router is been added off 
const express = require('express');
const app = express();
const router = express.Router();
// the console is been fired up .
app.get(res, req){
  if(res)=>(){console.log("The router is been connected")}
}
console.log("Fired up the process");

function expressWriten(node){
  this.data = data:
  this.set = set;
  module.export(node);
}
// caling the function
expressWriten(node.connect);
// scondary dependencies add
// set passport
const passport = require('passport');

const localStrategy = require('./conflg/localStrategy');
const parser = require('cookie-parser');
const session = require('express-session');
const mongoStore = require('connect-mongo');
const expressEjsLayouts = require('express-ejs-layouts');

  
const PORT =   process.env.ERS_PORT;
const app = express();

app.use(express.json()); // concverting the json to js object notation 
app.use(parser());
app.use(express.urlencoded({extended: true}));

// passport setup 

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// joining path for public src folder
app.use(express.static(path.join(__dirname, 'public')));
// Exact static files from the webserver
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// setup the seesion tokens 
// session setup
app.use(session({
    name: 'ERS',
    secret: process.env.ERS_SESSION_SECRETE,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({
        mongoUrl: process.env.ERS_DB_URI,
        collectionName: 'session',
        autoRemove: 'native'
    })
}));

// Route monitoring 
app.use('/', require('./routes/index') );
// ejs Setup
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');
app.set('views' , __dirname, 'views');

// conneting to the port
app.use(PORT, function(err){
    if(err){
        console.log("Oops! Server is caught following Errors: " + err);
    }
    console.log('Your server is been fired up on the port: ' + PORT);
})
