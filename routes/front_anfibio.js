var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/lista', (req,res,next)=>{
  request.get('http://localhost:3000/anuros/api/anfibio',(err,response,body)=>{
    if(err) res.status(404).json({mensaje: "Error al consumir"});
    else res.render('anfibio_view', {'datos': JSON.parse(body)});
  });
});

module.exports = router;
