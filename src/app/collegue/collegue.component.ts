import { Component, Input, OnInit } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  @Input()
  collegue: CollegueComponent;

  constructor() { }

  afficheConsoleModif(): void {
    console.log('Modification du collègue');
  }
  afficheConsoleCrea(): void {
    console.log(`Création d'un nouveau collègue`);
  }

  ngOnInit(): void {
  }

}