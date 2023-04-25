import { Request, Response } from 'express';
import productService from '../services/productService';
import { IProduct } from '../interfaces/IProduct';

async function createProduct(req: Request, res: Response) {
  const product = req.body as IProduct;

  const { type, data } = await productService.createProduct(product);
  res.status(type).json(data);
}

async function getAll(_req: Request, res: Response) {
  const { type, data } = await productService.getAll();

  res.status(type).json(data);
}

export default {
  createProduct,
  getAll,
};