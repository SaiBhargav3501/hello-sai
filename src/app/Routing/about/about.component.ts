import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
   querycompany:""
   querytag=""
  
   allobj:any;
  constructor(private route:Router,private activateRoute:ActivatedRoute){
    this.activateRoute.queryParams.subscribe(data=>{
      console.log(data)
      
      this.allobj=data
      
      this.querytag=data['tag']
      this.querycompany=data['company']
    })

  }

  clickToContact(){
    // this.route.navigate(['contact'])  // default it is absolute path
    this.route.navigateByUrl('contact')  // default absolute path 
  }

  clickToHomeRelate(){
    this.route.navigate(['home'],{relativeTo:this.activateRoute}) // to chnge to relative path
  }

}
