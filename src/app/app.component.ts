import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { matricules } from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';

  collegue = collegueMock;

  matricules = matricules;
}
