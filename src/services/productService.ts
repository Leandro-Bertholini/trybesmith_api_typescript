import ProductModel from '../models/ProductModel';
import { Product } from '../types/Product';

async function createProduct(product: Product) {
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