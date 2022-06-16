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

    db.query(sql,[email,password],(err, results)=>{
        if(err){
            console.log('err')
        }

        if(results.length > 0){
          db.query('SELECT * FROM dolphincove.tour_guide' , (err,results)=>{
            if(err){
                console.log('err')
            }

            else{
                // sessionFunction(email);
                // console.log(req.session.email)
                res.render('adminPage',{tourGuides:results})
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


router.post('/addTourGuide',(req,res)=>{
    let{name, email ,password, telephone, address} = req.body;
    let user_id = parseInt(req.body.user_id);

    // (async function hashedPassword(){
    //     hashedPassword = await bcrypt.hash(password, 8)
    // })()
    
    let sql = 'INSERT INTO tour_guide SET ?';
  
    db.query(sql,{user_id:user_id, name:name,email:email, password:password, telephone:telephone, address:address},(err,result)=>{
        if(err){
            console.log('error')
        }

        else{
            // console.log(hashedPassword)
            res.render('adminPage')
        }
    })
})



//logout route
router.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
})


module.exports = router