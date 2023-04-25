import { Request, Response } from 'express';
import productService from '../services/productService';
import { IProduct } from '../interfaces/IProduct';

async function createProduct(req: Request, res: Response) {
  const product = req.body as IProduct;

  const { type, insertedProduct } = await productService.createProduct(product);
  res.status(type).json(insertedProduct);
}

async function getAll(_req: Request, res: Response) {
  const { type, allProducts } = await productService.getAll();

  res.status(type).json(allProducts);
}

export default {
  createProduct,
  getAll,
};