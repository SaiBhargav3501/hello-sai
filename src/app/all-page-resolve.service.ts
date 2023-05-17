import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateChild, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { allSupportService } from "./Routing/support-contact/support.service";
@Injectable()
  
export class ResolveGuard implements Resolve<any>{

    constructor(private supportService:allSupportService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.supportService.fetchProduct()
        
    }


}