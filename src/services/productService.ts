import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/ProductModel';

async function createProduct(product: IProduct) {
  const insertedProduct = await ProductModel.createProduct(product);
  return { status: 201, insertedProduct };
}

export default {
  createProduct,
};