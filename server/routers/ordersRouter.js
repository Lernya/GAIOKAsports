import express from 'express';

import {
    addNewOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
    updateOrder
  } from "../controllers/orders.js";


const ordersRouter = express.Router();

// Hier wird den Routenteil definiert, der ab /users/ kommt! (Siehe server/index.js), also "Unterroutes"
ordersRouter.route('/').get(getAllOrders).post(addNewOrder);;
ordersRouter
    .route('/:id')
    .get(getOrderById)
    .put(updateOrder)
    .delete(deleteOrder);

export default ordersRouter;