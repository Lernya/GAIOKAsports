import express from 'express';
import './db/index.js';
// wichtig: immer Dateiendung js angeben
import usersRouter from './routers/usersRouter.js';
import ordersRouter from './routers/ordersRouter.js';
import productsRouter from './routers/productsRouter.js';
import categoriesRouter from './routers/categoriesRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = 8000;

// Middleware
// Cors, fuer Parser für json-Body


app.use(express.json()); // Body-Parser for POST-REQUESTS w/ JSON-Payloads, MUSS UNBEDINGT dabei sein für POST-Requests
// The payload of an API is the data you are interested in transporting to the server when you make an API request. Simply put, it is the body of your HTTP request and response message.

// Routes
// app.get('/', (req, res) => res.send('Hello, World! ¡Hola Mundo! Hallo Welt!'));
// Hier in index.js wird die Hauptroute definiert. Also das, was nach der Domain kommt und VOR dem, was in routers definiert wird.
// Daher alle Routen in routers haben /users/ als Basis!
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
