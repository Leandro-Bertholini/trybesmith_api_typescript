import { Router } from 'express';
import productController from '../controllers/productController';

const route = Router();

route.post('/', productController.createProduct);

export default route;