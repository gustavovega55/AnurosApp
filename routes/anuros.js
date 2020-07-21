var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Anuros = require('../models/anuros');

router.get('/anfibio/',(req,res,netxt)=>{
  Anuros.find({},(err,datos)=>{
    if(err) res.status(500).json({error:"Error en la consulta"});
    if(datos) res.status(200).json(datos);
  });
});

router.get('/anfibio/:idAnfibio',(req,res,next)=>{
  Anuros.findOne(
    {'id' : req.params.idAnfibio},
    (err,datos)=>{
      if( datos == null){
        res.status(404).json({mensaje:"Error"});
      }else{
        res.status(200).json(datos);
      }
    }
  );
});

router.post('/anfibio',(req,res,next)=>{
  var anfibio = Anuros(
    {
      id: req.body.id,
      nombre: req.body.nombre,
      especie: req.body.especie,
      sexo: req.body.sexo,
      ubicacion: req.body.ubicacion,
      imagen: req.body.imagen,
      canto: req.body.canto
    }
  );
  anfibio.save((err,datos)=>{
    if(err){
      res.status(404).json({
        mensaje:"Error"
      });
    }else{
      res.status(201).json(datos);
    }
  });
});


router.delete('/anfibio', (req,res,next)=>{
  res.status(405).json({mensaje:"Accion denegada"})
});

router.delete('/anfibio:idAnfibio', (req,res,next)=>{
  Marvel.findOneAndDelete({id: req.params.idAnfibio}, (err,datos)=>{
    if(err) res.status(404).json(err);
    else res.status(200).json(datos);
  });
});

module.exports = router;
