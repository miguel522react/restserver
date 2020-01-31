require('./config/config');

const express = require('express');

const app = express();
//medelware para recibir informacion del cuerpo html (esto reemplaza el bodyparser)
app.use(express.urlencoded({
    extended: false
}));
//esto va junto con la parte de arriba (bodyparser)
app.use(express.json());

//peticion get para traer datos
app.get('/usuario', (req, res) => {
  res.json("get usuario")
})

//peticion put para actualizar datos
app.put('/usuario', (req, res) => {
  res.json("put usuario")
})

//peticion delete para eliminar datos (yano se eliminan datos solo se niega la disponivilidad)
app.delete('/usuario', (req, res) => {
  res.json("delete usuario")
})

//peticion post para crear datos o elementos
app.post('/usuario', (req, res) => {

  let body = req.body;

  if(body.nombre === undefined){
    res.status(400).json({
      ok: false,
      mensaje: "el nombre es necesario"
    })
  }else{
    res.json({
      body
    })
  }
})

app.listen(process.env.PORT, () =>{
  console.log(`corriendo en el purto ${process.env.PORT}`)
})
