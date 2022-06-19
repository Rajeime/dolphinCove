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

//remove tourGuide
router.get('delete/:userId',(req,res)=> {
    const userId = req.params.userId
    let sql = 'DELETE FROM dolphincove.`tour_guide` WHERE id = ?'
    db.query(sql,[userId] ,(err, result) =>{
        if (err) throw err
        res.render('adminPage')
    })
})
module.exports = router