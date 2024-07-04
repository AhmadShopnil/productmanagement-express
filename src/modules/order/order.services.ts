import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: TOrder) => {
  //   const newOrder = new Order(orderData);
  return await Order.create(orderData);
};

const getAllOrders = async () => {
  return await Order.find();
};

const getOrdersByEmail = async (email: string) => {
  return await Order.find({ email }).exec();
};

export const orderService = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
