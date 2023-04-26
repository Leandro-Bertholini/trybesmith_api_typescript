import { Request, Response } from 'express';
import userService from '../services/userService';
import { User } from '../types/User';

async function createUser(req:Request, res: Response) {
  const { username, vocation, level, password } = req.body as User;
  
  const { type, data } = await userService.createUser(username, vocation, level, password);
  res.status(type).json(data);
}
export default {
  createUser,
};
