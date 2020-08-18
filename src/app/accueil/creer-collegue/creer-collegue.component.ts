import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

import { NouveauCollegue } from '../../models/NouveauCollegue';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  nouveauCol: NouveauCollegue ;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  creationCollegue(): void{
    console.log(this.nouveauCol);
    this.dataService.creerNouveauCollegue(this.nouveauCol);
  }

  nouveauCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }

}
