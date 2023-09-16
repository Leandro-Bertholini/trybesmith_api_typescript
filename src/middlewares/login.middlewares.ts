import { NextFunction, Request, Response } from 'express';
import { errorPasswordMessage, errorUserMessage } from '../utils/error.messages';

const verfyLoginData = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(400).json(errorUserMessage);
  } if (!password) {
    return res.status(400).json(errorPasswordMessage);
  }
  next();
};

export default verfyLoginData;