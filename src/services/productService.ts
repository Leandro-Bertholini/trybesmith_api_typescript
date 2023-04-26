import ProductModel from '../models/ProductModel';
import { IProduct } from '../interfaces/IProduct';

async function createProduct(product: IProduct) {
  const insertedProduct = await ProductModel.createProduct(product);
  return { type: 201, data: insertedProduct };
}

async function getAll() {
  const allProducts = await ProductModel.getAll();
  return { type: 200, data: allProducts };
}

export default {
  createProduct,
  getAll,
};