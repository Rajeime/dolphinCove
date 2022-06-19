const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.post('/',(req,res)=>{
    const {name, email, date, program} = req.body;
    const participants = parseInt(req.body.participants)
    let sql = 'INSERT INTO bookings_table SET ?';

  
    db.query(sql,{program:program, name:name, email:email, date:date, participants:participants},(err,result)=>{
        if(err){
            console.log('error')
        }

        else{
            let sql2 = "SELECT price FROM dolphincove.`dolphin_cove-programs` WHERE programs = ?"
            db.query(sql2, [program],(err, results)=>{
                console.log(results[0].price)
                res.redirect('/')
            })
        }
    })
})

// router.get('/',(req,res)=>{
//     let email = req.body.email
//     let sql = 'SELECT * FROM bookings_table WHERE email = ?'
//     db.query(sql,[email],(err, results)=>{
//         if(err){
//             console.log('error')
//         }

//         else{
//             console.log(results)
//         }
//     })
// })

module.exports = router