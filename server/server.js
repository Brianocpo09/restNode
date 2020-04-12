require('./config/config')

const express= require('express');
const app= express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario',function(req,res){
   res.json('get Usuario');
  
});


app.post('/usuario_post',function(req,res){
    let body = req.body;

    if (body.nombre===undefined){
        res.status(400).json({
            ok:false,
            mensaje:'El nombre es necesario'
        });
    }else{
        res.json({
            persona:body
        });
    }
   
 });

 app.put('/usuario_put/:id',function(req,res){
     let id= req.params.id;
    res.json(`put ${id}`);
   
 });

 app.delete('/usuario_delete',function(req,res){
    res.json('delete ');
   
 });

app.listen(process.env.PORT, ()=>{
   console.log('Servidor Escuchando en el puerto 3000');
});