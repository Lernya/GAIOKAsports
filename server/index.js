import express from 'express';
import './db/index.js';
import usersRouter from './routers/usersRouter.js';
import ordersRouter from './routers/ordersRouter.js';
// wichtig: immer Dateiendung js angeben

const app = express();
const PORT = 8000;

// Middleware
// Cors, fuer Parser für json-Body

// Routes
// app.get('/', (req, res) => res.send('Hello, World! ¡Hola Mundo! Hallo Welt!'));
// Hier in index.js wird die Hauptroute definiert. Also das, was nach der Domain kommt und VOR dem, was in routers definiert wird.
// Daher alle Routen in routers haben /users/ als Basis!
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);



app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
