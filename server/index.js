import express from "express";
import cors from "cors";
import "./db/index.js";
// wichtig: immer Dateiendung js angeben
import usersRouter from "./routers/usersRouter.js";
import ordersRouter from "./routers/ordersRouter.js";
import productsRouter from "./routers/productsRouter.js";
import categoriesRouter from "./routers/categoriesRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
const PORT = 8000;

// Middleware

app.use(express.json());
app.use(cors());
// Routes
//app.get("/", (req, res) => res.send("Hello, World! ¡Hola Mundo! Hallo Welt!"));

app.use("/users", usersRouter);
app.use("/orders", ordersRouter);

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
