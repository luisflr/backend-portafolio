const express = require('express');

// se usa mongoose para conectar con mongodbatlas
const mongoose = require('mongoose');

// instalamos dotenv y lo utilizamos para acceder a variables de entorno
require('dotenv').config();

// importamos las rutas
const project_routes = require ('./routes/projects.js');

// el metodo express() retorna el método de la aplicacion
const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use('/api/v1', project_routes);

//routes
app.get('/', (req, res) =>{
  res.send('Welcome to my API')
});



// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to db atlas'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log('server is listening on port', PORT));

