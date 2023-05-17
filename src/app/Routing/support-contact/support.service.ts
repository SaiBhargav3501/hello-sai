import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class allSupportService {



  constructor(private http:HttpClient) { }


  fetchProduct(){
    
   
  return this.http.get<any>('https://jsonplaceholder.typicode.com/photos')
  
    
  }

  // delete a single product


}
