const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.post('/',(req,res)=>{
    const {first_name, last_name, email, date, program } = req.body;
    const participants = parseInt(req.body.participants)
    let sql = 'INSERT INTO bookings_table SET ?';
  
    db.query(sql,{program:program,first_name:first_name, last_name:last_name, email:email, date:date, participants:participants},(err,result)=>{
        if(err){
            console.log('error')
        }

        else{
            res.redirect('/')
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