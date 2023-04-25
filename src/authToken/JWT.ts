import Jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const TOKEN_SECRET: string = process.env.JWT_SECRET || 'secret';

const generateToken = (user: IUser) => {
  const token = Jwt.sign({ user }, TOKEN_SECRET);
  return token;
};
  
export default generateToken;
