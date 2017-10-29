import { NoSwitchCaseFallThroughWalker } from 'tslint/lib/rules/noSwitchCaseFallThroughRule';
import {ActionReducer, Action} from '@ngrx/store';
import {State, intitialState} from '../state/main-state';
import {INCREASE_PRODUCTS, CLEAR_CART, REMOVE_PRODUCTS, DECREASE_PRODUCTS} from '../actions/main-action-creator';
import {
  ClearCartAction,
  DecreaseProductAction,
  IncreaseProductAction,
  RemoveProductAction,
  UpdateProductAction
} from '../actions/main-action-creator';

export const mainReducer: ActionReducer<State, Action> =
  (state = intitialState, action: Action) => {
    console.log('Action came in! ' + action.type);
    switch (action.type) {
      case INCREASE_PRODUCTS:
      case DECREASE_PRODUCTS:
        if (action instanceof UpdateProductAction) {
          action.products.forEach(product => {
            const inCart = state.cart.some(cartProduct => {
              if (cartProduct.id === product.id) {
                cartProduct.quantity += product.quantity;
                return true;
              } else {
                return false;
              }
            });
            if (!inCart) {
              state.cart.push(product);
            }
          });
        }
        return state;
      case CLEAR_CART:
        if (action instanceof ClearCartAction) {
          state.cart = [];
        }
        return state;
      case REMOVE_PRODUCTS:
        if (action instanceof RemoveProductAction) {
          state.cart = state.cart.filter(p => !action.products.some(id => id === p.id));
        }
        return state;
      default: {
        return state;
      }
    }
 };
