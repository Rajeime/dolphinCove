const express = require('express');
const router = express.Router();
const db = require('../database/db');
// const bcrypt = require('bcrypt');
// var hashedPassword;

// function sessionFunction(email){
//     req.session.loggedin = true;
//     req.session.email = email 
// }

//login route admin
router.post('/login/admin',(req,res)=>{
    let {email ,password} = req.body;
    let sql = 'SELECT * FROM dolphincove.admin WHERE email = ? and BINARY password = ?';

    db.query(sql,[email,password],(err, adminResults)=>{
        if(err){
            console.log('err')
        }

        if(adminResults.length > 0){
          db.query('SELECT * FROM dolphincove.tour_guide' , (err,results)=>{
            if(err){
                console.log('err')
            }

            else{
                // sessionFunction(email);
                // console.log(req.session.email)
                console.log(adminResults)
                res.render('adminPage',{tourGuides:results, adminInfo: adminResults})
            }
          })
        
        }
  
    })
})


//login for tourGuide
router.post('/login/tourGuide',(req,res)=>{
    let {email ,password} = req.body;
    let sql = 'SELECT * FROM dolphincove.tour_guide WHERE email = ? and BINARY password = ?';

    db.query(sql,[email,password],(err, results)=>{
        if(err){
            console.log('err')
        }

        if(results.length > 0){
        
            if(err){
                console.log('err')
            }

            else{
                // sessionFunction(email);
                // console.log(req.session.email);
                res.render('tourGuide')
            }
       
        
        }
  
    })
})



//logout route
router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})


module.exports = router