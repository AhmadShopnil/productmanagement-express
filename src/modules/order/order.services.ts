import { TProduct } from '../product/product.interface';
import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  const { productId, quantity } = orderData;

  // Retrieve the product and check if it exists
  const product: TProduct | null = await Product.findById(productId);

  if (!product) {
    throw new Error('Product not found');
  }

  // Check if sufficient quantity is available
  if (product?.inventory?.quantity < quantity) {
    throw new Error('Insufficient quantity in stock');
  }

  // Update product quantity
  product.inventory.quantity -= quantity;
  await Product.updateOne({ _id: productId }, product);

  //   const newOrder = new Order(orderData);
  return await Order.create(orderData);
};

const getAllOrders = async (email?: string | undefined) => {
  let query = {};

  if (email) {
    query = { email: email };
  }

  const orderList = await Order.find(query);

  if (!orderList) {
    throw new Error('Order not found');
  }
  return orderList;
};

const getOrdersByEmail = async (email: string) => {
  return await Order.find({ email });
  //   return await Order.find({ email }).exec();
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
