//  interface for a variant
export interface TVariant {
  type: string;
  value: string;
}

// interface for the inventory
export interface TInventory {
  quantity: number;
  inStock: boolean;
}

//  interface for a Product
export interface TProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}
