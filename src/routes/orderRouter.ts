import { Router } from 'express';
import orderController from '../controllers/orderController';

const route = Router();

route.get('/', orderController.getAll);

export default route;