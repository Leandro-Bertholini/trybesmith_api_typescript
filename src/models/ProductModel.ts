import { ResultSetHeader } from 'mysql2';
import { Product } from '../types/Product';
import connection from './connection';

async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };
  return newProduct; 
}

async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM Trybesmith.products';

  const [allProducts] = await connection.execute(query);

  return allProducts as Product[];
}

export default {
  createProduct,
  getAll,
};