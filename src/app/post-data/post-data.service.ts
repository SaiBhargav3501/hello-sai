import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Products } from './all-products-type';
import { Subject, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  error=new Subject<string>()

  constructor(private http:HttpClient) { }

  // getUsers(){
  //   const users=[
  //     {userId:1,username:"sai"},
  //     {userId:2,username:"preethi"},
  //     {userId:3,username:"shushmitha"}
  //   ];

  //   return users
  // }


  // creating the new product

  
  createProduct(products :{pname:string,desc:string,price:string}){
    const headers=new HttpHeaders({'myhead':'proacademy'})

    this.http.post<{name:string}>('https://for-all-http-angular-default-rtdb.firebaseio.com/products.json',products,{headers:headers})
    .subscribe((res)=>{
     console.log(res)
    },(err)=>{
      this.error.next(err.message)
    })

  }

  //fetch product from data base
  fetchProduct(){
    const header=new HttpHeaders()
    .set('access','all')
    .set('allval','all')
    const params=new HttpParams()
    .set('print','pretty')
   
  return this.http.get<{[key:string]:Products}>('https://for-all-http-angular-default-rtdb.firebaseio.com/products.json?',{headers:header,params:params})
  .pipe(map((res)=>{
    const product=[];
    for (const key in res){  
      console.log(key)
      console.log(res.hasOwnProperty(key))
      if(res.hasOwnProperty(key)){
        product.push({...res[key],id:key})
        console.log({...res[key],id:key})
        
      }
    }
 
    return product
    
  }),catchError((err)=>{
    // here we are getting error mad eby get request
    //so we need to sub in the get in ts file
    // we will the eooror msg but whwn we use catcherror we have to subscribe in ts file
    // so here we are returning the error
    return throwError(err)
  }))

    
  }

  // delete a single product
  deleteProduct(id:string){
    let header=new HttpHeaders()
    header=header.append("duhygfuh","uyhfuh")
    header=header.append('alll','ufhuirgfi')
    this.http.delete('https://for-all-http-angular-default-rtdb.firebaseio.com/products/'+id+'.json',{headers:header})
  .subscribe()
  }

  // deleting all products
  deleteAllProducts(){
    this.http.delete('https://for-all-http-angular-default-rtdb.firebaseio.com/products.json')
  .subscribe()
  }

  updateTheProduct(id:string,value:Products){
    this.http.put('https://for-all-http-angular-default-rtdb.firebaseio.com/products/'+id+'.json',value)
    .subscribe()
  }

}
