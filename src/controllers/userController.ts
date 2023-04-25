import { Request, Response } from 'express';
import userService from '../services/userService';
// import { IUser } from '../interfaces/IUser';

async function createUser(req:Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  
  const { type, data } = await userService.createUser(username, vocation, level, password);
  res.status(type).json(data);
}
export default {
  createUser,
};
