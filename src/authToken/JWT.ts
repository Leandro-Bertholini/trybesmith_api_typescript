import Jwt from 'jsonwebtoken';
import { User } from '../types/User';

const TOKEN_SECRET: string = process.env.JWT_SECRET || 'secret';

const generateToken = (user: User) => {
  const token = Jwt.sign({ user }, TOKEN_SECRET);
  return token;
};
  
export default generateToken;
