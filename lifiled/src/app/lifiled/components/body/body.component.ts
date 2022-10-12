import { Component, OnInit } from '@angular/core';
import { menu, socialNetworks } from './nav-menu';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  navMenu!: { label: string, route: string }[];
  social_networks!: { icone: string, label: string }[];

  constructor() { }

  ngOnInit(): void {
    this.navMenu = menu;
    this.social_networks = socialNetworks;
    const header = <HTMLElement>document.querySelector('#navigation');
    window.addEventListener('scroll', () => {
      header.classList.toggle('navigationScroll', window.scrollY > 300);
    });
  }
}
