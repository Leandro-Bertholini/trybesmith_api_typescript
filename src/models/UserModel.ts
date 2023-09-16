import { ResultSetHeader } from 'mysql2';
import { User } from '../types/User';
import connection from './connection';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<User> {
  const q = 'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?,?,?,?)';
  const values = [username, vocation, level, password];

  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(q, values);
  const newUser: User = { id, username, vocation, level, password };
  return newUser;
}

async function getByNamePassword(username: string, password: string) {
  const q = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const values = [username, password];

  const [user] = await connection.execute(q, values);
  return user;
}

export default {
  createUser,
  getByNamePassword,
};