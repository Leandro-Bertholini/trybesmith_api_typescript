import UserModel from '../models/UserModel';

async function userLogin(username: string, password: string) {
  if (!username) return { type: 400, data: { message: '"username" is required' } };
  if (!password) return { type: 400, data: { message: '"password" is required' } };

  const [user] = await UserModel.getByNamePassword(username, password);
  console.log('retorno no login service: ', user);

  if (!user) return { status: 401, data: { message: 'Username or password invalid' } };

  return { status: 200, data: user };
}

export default {
  userLogin,
};