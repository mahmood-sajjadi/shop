import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "./state-management/state/main-state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
