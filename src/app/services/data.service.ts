import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matricules } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';

import { NouveauCollegue } from '../models/NouveauCollegue';
import { Observable, from, interval, Subject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {delay, map, filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
  })
export class DataService {

  // Création du Subject
  subjectCollegueSelectionne = new Subject<Collegue>();

  collegues: Collegue[];

  constructor(private http: HttpClient) { }

  selectionner(collegueSelect: Collegue): void {
    this.subjectCollegueSelectionne.next(collegueSelect);
  }

  sabonnerATodoSelect(): Observable<Collegue> {
    return this.subjectCollegueSelectionne.asObservable();
  }

  listerParNom(nom: string): Observable<Collegue> {
    return this.http.get<Collegue>(`https://leo-collegues-api.herokuapp.com/collegues?nom=${nom}`);
  }

  listerPhoto(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>('https://leo-collegues-api.herokuapp.com/collegues/photos');
  }

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