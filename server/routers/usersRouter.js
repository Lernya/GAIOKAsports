import express from 'express';
import {getAllUsers} from '../controllers/users.js';
import {getUserById} from '../controllers/users.js';

const usersRouter = express.Router();

// Hier wird den Routenteil definiert, der ab /users/ kommt! (Siehe server/index.js), also "Unterroutes"
usersRouter.route('/').get(getAllUsers);
usersRouter.route('/:id').get(getUserById);

export default usersRouter;