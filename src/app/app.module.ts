import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './accueil/collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './accueil/recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponent } from './accueil/creer-collegue/creer-collegue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { MenuComponent } from './menu/menu.component';

const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'gallerie', component: GallerieComponent},
  { path: 'apropos', component: AproposComponent},
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    AccueilComponent,
    AproposComponent,
    GallerieComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
