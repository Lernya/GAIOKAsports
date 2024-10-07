import express from "express";
import "./db/index.js";
import productsRouter from "./routers/productsRouter.js";
import categoriesRouter from "./routers/categoriesRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = 8000;

// Middleware

app.use(express.json());

// Routes
// app.get("/", (req, res) => res.send("Hello, World! ¡Hola Mundo! Hallo Welt!"));

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
