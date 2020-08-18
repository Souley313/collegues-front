import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css'],
  providers: [ DataService ]
})
export class CollegueComponent implements OnInit {

  collegue = this.dataService.recupererCollegueCourant();
  noModif = true;
  modif = null;

  constructor(private dataService: DataService) { }

  afficheConsoleModif(): void {
    this.modif = true;
    this.noModif = null;
    console.log('Modification du collègue');
  }
  afficheConsoleCrea(): void {
    console.log(`Création d'un nouveau collègue`);
  }

  valider(): void{
    console.log('Validation des modifications');
    this.modif = false;
    this.noModif = true;
  }

  ngOnInit(): void {
  }

}
