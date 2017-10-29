/* tslint:disable:no-unused-variable */
import {async, TestBed, inject} from '@angular/core/testing';
import {mainReducer} from "./main-reducer";
import {StoreModule} from "@ngrx/store";
import {State} from "../state/main-state";
import {Store} from "@ngrx/store";

describe('Reducer', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [],
        imports: [StoreModule.provideStore({mainReducer})]
      })
      .compileComponents();
  }));
});
