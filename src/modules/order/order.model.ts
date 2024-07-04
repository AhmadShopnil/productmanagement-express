import mongoose, { Schema } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema: Schema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model<TOrder>('Order', OrderSchema);
