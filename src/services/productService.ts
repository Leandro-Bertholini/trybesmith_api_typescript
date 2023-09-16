import ProductModel from '../models/ProductModel';
import { Product } from '../types/Product';

async function createProduct(product: Product) {
  const insertedProduct = await ProductModel.createProduct(product);
  return { status: 201, data: insertedProduct };
}

async function getAll() {
  const allProducts = await ProductModel.getAll();
  return { status: 200, data: allProducts };
}

export default {
  createProduct,
  getAll,
};