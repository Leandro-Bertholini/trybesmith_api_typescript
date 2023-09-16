import { Router } from 'express';
import loginController from '../controllers/loginController';
import verfyLoginData from '../middlewares/login.middlewares';

const route = Router();

route.post('/', verfyLoginData, loginController.userLogin);

export default route;