import { Router } from 'express';
import productController from '../controllers/productController';

const route = Router();

route.post('/', productController.createProduct);
// route.get('/', productController.getAll);

export default route;