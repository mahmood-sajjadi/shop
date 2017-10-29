import {Action} from '@ngrx/store';
import {Product} from '../../entities/product';

export const INCREASE_PRODUCTS: 'INCREASE_PRODUCTS' = 'INCREASE_PRODUCTS';
export const DECREASE_PRODUCTS: 'DECREASE_PRODUCTS' = 'DECREASE_PRODUCTS';
export const REMOVE_PRODUCTS: 'REMOVE_PRODUCTS' = 'REMOVE_PRODUCTS';
export const CLEAR_CART: 'CLEAR_CART' = 'CLEAR_CART';

export class UpdateProductAction implements Action {
  readonly type: 'INCREASE_PRODUCTS' | 'DECREASE_PRODUCTS';
  constructor(type: 'INCREASE_PRODUCTS' | 'DECREASE_PRODUCTS',
    public products: {id: number, quantity: number}[]
  ) {}
}

export class IncreaseProductAction extends UpdateProductAction {
  constructor(products: {id: number, quantity: number}[]) {
    products.some(p => {
      if (p.quantity <= 0) {
        throw new Error('IncreaseProductAction <= 0');
      } else {
        return false;
      }
    });
    super(INCREASE_PRODUCTS, products);
  }
}

export class DecreaseProductAction extends UpdateProductAction {
  constructor(public products: {id: number, quantity: number}[]) {
    super(DECREASE_PRODUCTS, products.map(p => {
      if (p.quantity <= 0) {
        throw new Error('DecreaseProductAction <= 0');
      } else {
        return  {id: p.id, quantity: -p.quantity};
      }
    }));
  }
}

export class RemoveProductAction implements Action {
  readonly type: string = REMOVE_PRODUCTS;
  constructor(public products: number[]) {}
}

export class ClearCartAction implements Action {
  readonly type: string = CLEAR_CART;
}
