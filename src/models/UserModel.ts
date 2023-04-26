import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces/IUser';
import connection from './connection';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<IUser> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?,?,?,?)',
    [username, vocation, level, password],
  );
  const newUser: IUser = { id, username, vocation, level, password };
  return newUser;
}

export default {
  createUser,
};