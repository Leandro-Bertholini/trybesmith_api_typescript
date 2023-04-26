import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function getAll(): Promise<RowDataPacket[]> {
  const [listOfServices] = await connection.execute<RowDataPacket[]>(`
    SELECT o.id,o.user_id as userId, json_arrayagg(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id   
    GROUP BY o.id`);
  
  return listOfServices;
}

export default {
  getAll,
};