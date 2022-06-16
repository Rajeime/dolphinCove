const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');


router.post('/',(req,res)=>{
    let{name, email ,password, telephone, address} = req.body;
    let user_id = parseInt(req.body.user_id);
    let hashedPassword;

    (async function hashedPasswordfunc(){
        return hashedPassword = await bcrypt.hash(password, 8)
    })()
    
    let sql = 'INSERT INTO tour_guide SET ?';
  
    db.query(sql,{user_id:user_id, name:name,email:email, password:password, telephone:telephone, address:address},(err,result)=>{
        if(err){
            console.log('error')
        }

        else{
            db.query('SELECT * FROM dolphincove.tour_guide' , (err,results)=>{

                res.render('adminPage',{tourGuides:results})
            })
    
       
        }
    })
})

module.exports = router