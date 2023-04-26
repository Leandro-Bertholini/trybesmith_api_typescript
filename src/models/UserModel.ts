import { ResultSetHeader } from 'mysql2';
import { User } from '../types/User';
import connection from './connection';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<User> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?,?,?,?)',
    [username, vocation, level, password],
  );
  const newUser: User = { id, username, vocation, level, password };
  return newUser;
}

export default {
  createUser,
};