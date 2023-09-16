import userModel from '../models/UserModel';
import generateToken from '../authToken/JWT';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const newUser = await userModel.createUser(username, vocation, level, password);
  
  const token = generateToken(newUser);
  return { status: 201, data: { token } };
}

export default {
  createUser,
};