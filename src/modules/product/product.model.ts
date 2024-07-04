import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariant } from './product.interface';

// Create a schema for a variant
const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Create a schema for the inventory
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Create the main product schema
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

// Create the Product model
export const Product = model<TProduct>('Product', productSchema);
