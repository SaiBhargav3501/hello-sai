import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {
  paragraphEl:any;
  constructor(){}
  ngOnInit(): void {
    
  }

  // @ContentChild("paragraph")paragraphEl:ElementRef;

}
