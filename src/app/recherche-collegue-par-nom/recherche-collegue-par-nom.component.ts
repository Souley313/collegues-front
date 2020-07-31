import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  matricules = this.dataService.rechercherParNom('nom');
  recherche = false;

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {
  }

  rechercheCollegue(): void {
    this.recherche = true;
    console.log('Recherche Collègue');
  }

}
