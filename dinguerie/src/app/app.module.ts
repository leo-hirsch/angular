import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestoComponent } from './resto/resto.component';
import {RestoService} from "./resto.service";
import { AfficherestoComponent } from './afficheresto/afficheresto.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { RestoFormComponent } from './resto-form/resto-form.component';
import { CouleurDirective } from './couleur.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestoComponent,
    AfficherestoComponent,
    RestoFormComponent,
    CouleurDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
