import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler.js";
import "./db/index.js";
// wichtig (bei Express): immer Dateiendung js angeben
import usersRouter from "./routers/usersRouter.js";
import ordersRouter from "./routers/ordersRouter.js";
import productsRouter from "./routers/productsRouter.js";
import categoriesRouter from "./routers/categoriesRouter.js";

const app = express();
const PORT = 8000;

// Middleware
// JSON-Body-Parser, Cors, Error-Handler,

app.use(express.json()); // Body-Parser for POST-REQUESTS w/ JSON-Payloads, ein MUSS für POST-Requests

app.use(cors());

app.use(errorHandler);

// Routes
//app.get("/", (req, res) => res.send("Hello, World! ¡Hola Mundo! Hallo Welt!"));

app.use("/users", usersRouter);
app.use("/orders", ordersRouter);

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);


app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
