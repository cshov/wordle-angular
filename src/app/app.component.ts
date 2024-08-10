import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WordleComponent} from "./components/wordle/wordle.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WordleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wordle-angular';
}
