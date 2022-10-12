import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './components/accueil/accueil.component';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrestationComponent } from './components/prestation/prestation.component';
import { RealisationComponent } from './components/realisation/realisation.component';

const routes: Routes = [
  { 
    path: '', 
    component: BodyComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'prestation', component: PrestationComponent },
      { path: 'realisation', component: RealisationComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'accueil', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifiledRoutingModule { }
