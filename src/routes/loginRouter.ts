import { Router } from 'express';
import loginController from '../controllers/loginController';

const route = Router();

route.post('/', loginController.userLogin);

export default route;