import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { allSupportService } from './support.service';
@Component({
  selector: 'app-support-contact',
  templateUrl: './support-contact.component.html',
  styleUrls: ['./support-contact.component.css']
})
export class SupportContactComponent implements OnInit{
  users:any;

  constructor(private supportList:allSupportService,private route:ActivatedRoute){

  }
 ngOnInit(): void {
  //  this.supportList.fetchProduct().subscribe((val)=>{
  //   this.users=val
  //  })

   this.users=this.route.snapshot.data['alldata']
 }


}
