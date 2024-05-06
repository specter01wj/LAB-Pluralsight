import { Product } from './product';

export interface LineItem {
  product: Product;
  qty: number;
}
