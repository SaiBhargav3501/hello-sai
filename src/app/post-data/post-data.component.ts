import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import {map} from 'rxjs/operators'
import { Products } from './all-products-type';
import { PostDataService } from './post-data.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {


 constructor(private http:HttpClient,private productService:PostDataService){}

 allProducts:Products[]=[]
 isFetching=false;
 errormsg :string=null;
 currentproductId:string;
 @ViewChild('productsForm') form:NgForm
 edit=false
 errorsub:Subscription

 ngOnInit() {
   this.fetchProductData()
   this.errorsub=this.productService.error.subscribe((message)=>{
    this.errormsg=message
   })
 }

 onProductsFetch(){
  this.fetchProductData()
 } 


addTheProducts(products :{pname:string,desc:string,price:string}){
 //console.log(products)
 if(!this.edit){
this.productService.createProduct(products)
this.form.reset()
 }
 else{
this.productService.updateTheProduct(this.currentproductId,products)
this.form.reset()
}
 
}

private fetchProductData(){
  this.isFetching=true
  this.productService.fetchProduct().subscribe((product)=>{
    this.allProducts=product
    this.isFetching=false
  },(err)=>{  // it is only executed when catch error is returned
    this.errormsg=err.message
    //console.log(err.message)
  }) 
  



  
}

onDleteProduct(id:string){
  this.productService.deleteProduct(id)

}


onclearProduct(){
  this.productService.deleteAllProducts()

}

onEditClicked(id:string){
  this.currentproductId=id;
  let currentProduct= this.allProducts.find( (each)=>  { return each.id === id})
  //console.log(currentProduct)
  //console.log(this.form.value)
  this.form.setValue({
    pname:currentProduct.pname,
    desc:currentProduct.desc,
    price:currentProduct.price

  })
  this.edit=true
}

ngOnDestroy(){
  this.errorsub.unsubscribe();
}


}


















//   post:any[]=[]
// constructor(private http:HttpClient){
//     http.get('https://jsonplaceholder.typicode.com/posts')
//     .subscribe(response=>{
//       console.log(response)
//       this.post.push(<JSON>response)
  
//     })

//     {{console.log(this.post)}}
//  }

//  createPost(input:HTMLInputElement){
//   let post:any={title:input.value}

//   this.http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
//     .subscribe(response=>{
//       post['id']=<JSON>(response)
      

//     })

//  }