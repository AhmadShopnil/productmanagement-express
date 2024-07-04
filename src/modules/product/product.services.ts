/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInDB = async (product: TProduct) => {
  // Check if product already exists by name
  const productExists = await Product.findOne({ name: product.name });

  if (productExists) {
    throw new Error('Product Already Exists!');
  }

  const result = await Product.create(product);
  return result;
};

const getAllProductsFromDB = async (
  searchTerm?: string,
): Promise<TProduct[]> => {
  let query = {};

  if (searchTerm) {
    query = { tags: { $in: [searchTerm] } };
  }

  const result = await Product.find(query);
  return result;
};
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findById({ _id: productId });
  return result;
};

const updateSingleProductInDB = async (productId: string, updateData: any) => {
  const productExists = await Product.findById(productId);

  if (productExists) {
    const result = await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
    });
    return result;
  } else {
    throw new Error('Product not found');
  }
};

const deleteSingleProductInDB = async (productId: string) => {
  const productExists = await Product.findById({ _id: productId });

  if (productExists) {
    const result = await Product.findByIdAndDelete({ _id: productId });
    return result;
  } else {
    throw new Error('Product not found');
  }
};

export const productService = {
  createProductInDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductInDB,
  deleteSingleProductInDB,
};
