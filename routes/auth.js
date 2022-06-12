const express = require('express');
const { end } = require('../database/db');
const router = express.Router();
const db = require('../database/db');

router.post('/addTourGuide',(req,res)=>{
    let{name, email ,password, telephone, address} = req.body;
    let user_id = parseInt(req.body.user_id)
    let sql = 'INSERT INTO tour_guide SET ?'
    db.query(sql,{user_id:user_id, name:name,email:email, password:password, telephone:telephone, address:address},(err,result)=>{
        if(err){
            console.log('error')
        }

        else{
            res.render('adminPage')
        }
    })
})


router.post('/login',(req,res)=>{
    let {email ,password} = req.body;
    let sql = 'SELECT * FROM dolphincove.user_login WHERE email = ? and BINARY password = ?';

    db.query(sql,[email,password],(err, results)=>{
        if(err){
            console.log('err')
        }

        else if(results.length > 0){
            if(results[0].user_type == 'admin'){
                res.render('adminPage')
               
            }

            else{
                res.render('tourGuide')
            }
        }
    })
})



module.exports = router