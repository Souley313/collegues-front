import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { PhotoUrl } from '../models/PhotoUrls';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})

export class GallerieComponent implements OnInit {

  photoUrl: PhotoUrl[];

  constructor(private collegueSrv: DataService) { }

  ngOnInit(): void {
    this.collegueSrv.listerPhoto().subscribe(
      valeur => this.photoUrl = valeur,
      err => {},
      () => {}
    );
  }

}
