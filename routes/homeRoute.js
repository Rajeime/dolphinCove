const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/',(req,res)=>{
    let sql = 'SELECT * FROM dolphincove.`dolphin_cove-programs`'
    db.query(sql,(err, results, fields)=>{
        if(err) {
            console.log(err)
        }
        res.render('index',{programs:results})
    })
    
})


module.exports = router