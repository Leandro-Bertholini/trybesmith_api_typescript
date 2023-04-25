import { ResultSetHeader } from 'mysql2';
import { IProduct } from '../interfaces/IProduct';
import connection from './connection';
// import connection from '../models/connection';

async function createProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct = { 
    id,
    name, 
    amount,
  };
  console.log('console do retorno:', newProduct);
  return newProduct; 
  
}

export default {
  createProduct,
};