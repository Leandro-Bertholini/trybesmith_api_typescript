import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';

async function createProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: IProduct = { id, name, amount };
  return newProduct; 
}

async function getAll(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';

  const [allProducts] = await connection.execute(query);

  return allProducts as IProduct[];
}

export default {
  createProduct,
  getAll,
};