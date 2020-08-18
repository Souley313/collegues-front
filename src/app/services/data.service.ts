import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matricules } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';

import { NouveauCollegue } from '../models/NouveauCollegue';
import { Observable, from, interval, Subject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
  })
export class DataService {

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): string[] {
  // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.
  return matricules;
  }
  recupererCollegueCourant(): Collegue {
  // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.
  return collegueMock;
  }

  creerNouveauCollegue(collegue: NouveauCollegue): void{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    // envoie de la requête
    this.http.post('https://robin-collegue-app.herokuapp.com/',
    JSON.stringify(collegue),
    httpOptions
    ).subscribe((data: any) => {
      console.log(data);
    });
  }
}