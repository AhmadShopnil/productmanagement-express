/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productService } from './product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Validate the product data using the validation schema
    // const validatedData = productValidationSchema.parse(productData);

    // Call the service to create the product in the database
    const result = await productService.createProductInDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product successfully created',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create new product',
      error: {
        code: 500,
        description: error?.message,
      },
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string | undefined;
    const products = await productService.getAllProductsFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: products,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: {
        code: 500,
        description: error?.message,
      },
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDB(productId);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
        error: {
          code: 404,
          description: 'Product not found!',
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch the product',
      error: {
        code: 500,
        description: error?.message,
      },
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await productService.updateSingleProductInDB(
      productId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Product successfully updated',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update the product',
      error: {
        code: 500,
        description: error?.message,
      },
    });
  }
};

const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await productService.deleteSingleProductInDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product successfully deleted',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete the product',
      error: {
        code: 500,
        description: error?.message,
      },
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
