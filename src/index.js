const express = require('express');
const cors = require('cors');

// se usa mongoose para conectar con mongodbatlas
const mongoose = require('mongoose');

// instalamos dotenv y lo utilizamos para acceder a variables de entorno
require('dotenv').config();

const WHITE_LIST = [
  'http://localhost:8800',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:1234',
  'https://luisgfr.com',
  'https://www.luisgfr.com/',
  'https://www.luisgfr.com',
]


// importamos las rutas
const project_routes = require ('./routes/projects.js');

// el metodo express() retorna el método de la aplicacion
const app = express();

const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors({
  origin: (origin, callback) => {
    if (WHITE_LIST.includes(origin) || !origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}));

app.use(express.json())

app.use('/api/v1', project_routes);

//routes
app.get('/', (req, res) =>{
  res.send('Proyecto backend portafolio node/express/mongoose')
});



// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('connected to db atlas'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log('server is listening on port', PORT));

