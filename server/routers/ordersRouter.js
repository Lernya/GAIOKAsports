import express from 'express';
import {getAllOrders} from '../controllers/orders.js';
import {getOrderById} from '../controllers/orders.js';

const ordersRouter = express.Router();

// Hier wird den Routenteil definiert, der ab /users/ kommt! (Siehe server/index.js), also "Unterroutes"
ordersRouter.route('/').get(getAllOrders);
ordersRouter.route('/:id').get(getOrderById);

export default ordersRouter;