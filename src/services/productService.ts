import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/ProductModel';

async function createProduct(product: IProduct) {
  const insertedProduct = await ProductModel.createProduct(product);
  return { type: 201, insertedProduct };
}

async function getAll() {
  const allProducts = await ProductModel.getAll();
  return { type: 200, allProducts };
}

export default {
  createProduct,
  getAll,
};