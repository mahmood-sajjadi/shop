import {ActionReducer, Action} from "@ngrx/store";
import {State, intitialState} from "../state/main-state";
import {INCREMENT, EVENT_FROM_EFFECT} from "../actions/main-action-creator";

export const mainReducer: ActionReducer<State> =
  (state = intitialState, action: Action) => {
    console.log('Action came in! ' + action.type);
    switch (action.type) {
      default: {
        return state;
      }
    }
 }
