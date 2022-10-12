import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-realisation',
  templateUrl: './realisation.component.html',
  styleUrls: ['./realisation.component.scss']
})
export class RealisationComponent implements OnInit {
  url ="https://www.youtube.com/embed/3K5ayAx_mVs"
  url1 ="https://www.youtube.com/embed/WcRWdMS48a4"

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getSafeurl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  getSafeurl1(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.url1);
  }
}
