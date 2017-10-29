export interface State {
  cart: {
    id: number;
    quantity: number;
  }[];
}

export const intitialState: State = {
  cart: []
};
