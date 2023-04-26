import { Request, Response } from 'express';
import orderService from '../services/orderService';

async function getAll(_req: Request, res: Response) {
  const { type, data } = await orderService.getAll();

  res.status(type).json(data);
}

export default {
  getAll,
};