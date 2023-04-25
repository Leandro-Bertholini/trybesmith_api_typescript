// import { IUser } from '../interfaces/IUser';
import userModel from '../models/userModel';
import generateToken from '../authToken/JWT';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const newUser = await userModel.createUser(username, vocation, level, password);
  // const { id } = newUser;
  
  const token = generateToken(newUser);
  return { type: 201, data: { token } };
}

export default {
  createUser,
};