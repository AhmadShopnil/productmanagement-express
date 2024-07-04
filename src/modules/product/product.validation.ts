import { z } from 'zod';

// validation shema for create
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

const createProductValidationSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().min(0),
  category: z.string().min(1),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

// validation shema for update
const updateVariantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const updateInventorySchema = z.object({
  quantity: z.number().min(0).optional(),
  inStock: z.boolean().optional(),
});

const updateProductValidationSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  variants: z.array(updateVariantSchema).optional(),
  inventory: updateInventorySchema.optional(),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
