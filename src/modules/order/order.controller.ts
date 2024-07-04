/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const newOrder = await orderService.createOrder(orderData);

    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: newOrder,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create new order',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;

    const orders = await orderService.getAllOrders(email);

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
      error: {
        code: 500,
        description: error.message,
      },
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
};
