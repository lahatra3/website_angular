import { Component, OnInit } from '@angular/core';
import { first, offres, produits } from './lists';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  first_list!: { image: string, label: string }[];
  produits_list!: { image: string, label: string } [];
  offres_list!: { image: string, label: string } [];
  constructor() { }

  ngOnInit(): void {
    this.first_list = first;
    this.produits_list = produits;
    this.offres_list = offres;
  }

}
