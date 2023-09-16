import { Request, Response } from 'express';
import loginService from '../services/loginService';
import { Login } from '../types/Login';

async function userLogin(req: Request, res: Response):Promise<void> {
  const { username, password } = req.body as Login;
  const { status, data } = await loginService.userLogin(username, password);

  res.status(status).json(data);
}

export default {
  userLogin,
};