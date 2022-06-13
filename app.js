const express = require('express');
const app = express();
const path = require('path');
const publicDirectory = path.join(__dirname, '/public');
const session = require('express-session');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

//route variables
const homeRoute = require('./routes/homeRoute');
const auth = require('./routes/auth')

//set static files
app.use(express.static(publicDirectory))

// setup session
app.use(session({
    secret: process.env.SECRET_KEY || 'roadmap',
    saveUninitialized:false,
    resave: false,
    cookie:{
        maxAge: 120000
    }
}));


//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/',homeRoute);
app.use('/auth', auth);

// app.get('/admin',(req,res)=>{
//     res.render('adminPage')
// })

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})