import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import mongoose from 'mongoose';

// middleware
import { apiLimiter } from './middleware.js';

// importamos las rutas
import project_routes from './routes/projects.js';
import work_routes from './routes/works.js'

// instalamos dotenv y lo utilizamos para acceder a variables de entorno
dotenv.config();

const WHITE_LIST = [
  'http://localhost:8800',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:1234',
  'https://luisgfr.com',
  'https://www.luisgfr.com/',
  'https://www.luisgfr.com',
]



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

app.use(express.json(), apiLimiter)

app.use('/api/v1', project_routes);
app.use('/api/v1', work_routes);

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

