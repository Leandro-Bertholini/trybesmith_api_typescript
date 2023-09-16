import { Request, Response } from 'express';
import productService from '../services/productService';
import { Product } from '../types/Product';

async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;

  const { status, data } = await productService.createProduct(product);
  res.status(status).json(data);
}

async function getAll(_req: Request, res: Response) {
  const { status, data } = await productService.getAll();

  res.status(status).json(data);
}

export default {
  createProduct,
  getAll,
};