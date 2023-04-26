import { Request, Response } from 'express';

async function userLogin(req: Request, res: Response):Promise<void> {
  const { username, password } = req.body;
}

export default {
  userLogin,
};