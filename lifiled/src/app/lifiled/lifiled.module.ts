import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifiledRoutingModule } from './lifiled-routing.module';
import { BodyComponent } from './components/body/body.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { RealisationComponent } from './components/realisation/realisation.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    BodyComponent,
    AccueilComponent,
    PrestationComponent,
    RealisationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    LifiledRoutingModule
  ],
  exports: [
    BodyComponent,
    AccueilComponent,
    PrestationComponent,
    RealisationComponent,
    ContactComponent
  ]
})
export class LifiledModule { }
