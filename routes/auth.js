const express = require('express');
const router = express.Router();
const db = require('../database/db');


router.post('/addTourGuide',(req,res)=>{
    let{name, email ,password, telephone, address} = req.body;
    let user_id = parseInt(req.body.user_id)
    let sql = 'INSERT INTO tour_guide SET ?'
    let sql2 = 'INSERT INTO user_login SET ?'
    db.query(sql,{user_id:user_id, name:name,email:email, password:password, telephone:telephone, address:address},(err,result)=>{
        if(err){
            console.log('error')
        }

        else{
            db.query(sql2,{user_type:user_id, email:email, password:password},(err,result)=>{
               
               if(err){
                console.log('error')
               }
               else{
                res.render('adminPage')
               }
                
            })
            
        }
    })
})


//login route
router.post('/login',(req,res)=>{
    let {email ,password} = req.body;
    let sql = 'SELECT * FROM dolphincove.user_login WHERE email = ? and BINARY password = ?';

    db.query(sql,[email,password],(err, results)=>{
        if(err){
            console.log('err')
        }

        else if(results.length > 0){
            if(results[0].user_type == 1){
              
                db.query('SELECT * FROM dolphincove.tour_guide',(err,result)=>{
                    console.log(result)
                    res.render('adminPage',{tourGuides:result})
                   
                })
            }

            else{
                res.render('tourGuide')
            }
        }
    })
})


//logout route
router.get('/logout',(req,res)=>{
     res.redirect('/');
  
})


module.exports = router