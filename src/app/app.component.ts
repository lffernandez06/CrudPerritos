import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  DogListCardComponent } from "./components/dog-listCard/dog-listCard.component";
import { SeacrhBoxComponent } from "./components/search-box/seacrh-box/seacrh-box.component";

@Component({
  selector: 'app-root',
  imports: [ DogListCardComponent, DogListCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrudDogs';
}
