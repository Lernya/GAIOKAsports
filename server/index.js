import express from 'express';
import './db/index.js';
// wichtig: immer Dateiendung js angeben

const app = express();
const PORT = 8000;

// Middleware
// Cors, fuer Parser für json-Body

// Routes
app.get('/', (req, res) => res.send('Hello, World! ¡Hola Mundo! Hallo Welt!'));



app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
