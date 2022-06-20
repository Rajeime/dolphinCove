const express = require('express');
const app = express();
const path = require('path');
const publicDirectory = path.join(__dirname, '/public');
const session = require('express-session');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const db = require('./database/db');

//route variables
const homeRoute = require('./routes/homeRoute');
const auth = require('./routes/auth');
const signUp = require('./routes/signup');
const bookingsPage = require('./routes/bookings');

//creating server for socket.io to grab information from client to server
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io')
const io = socket(server);
let info;

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
app.use(bodyParser.urlencoded({ extended: false }));

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/',homeRoute);
app.use('/auth', auth);
app.use('/addTourGuide',signUp);
app.use('/bookings',bookingsPage);


//remove tourGuide
app.get('delete/:userId',(req,res)=> {
    const userId = req.params.userId
    let sql = 'DELETE FROM dolphincove.`tour_guide` WHERE id = ?'
    db.query(sql,[userId] ,(err, result) =>{
        if (err) throw err
        res.render('adminPage')
    })
})

//socket.io
io.on('connection', (socket)=>{
    socket.on('bookingsInfo',(info)=>{
       socket.emit('bookingsInfo',info)
    })
})

server.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})