import { Component } from '@angular/core';
import { Ideactivatecomp } from 'src/app/page-Deactivate.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements Ideactivatecomp {
 firstname;
 PersonEmailId;


 canExit(){
  if(this.firstname || this.PersonEmailId){
    return confirm("you have unsaved changes, Do you really want discard?")
  }else{
    return true
  }
 }
}
