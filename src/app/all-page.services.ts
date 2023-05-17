import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./Auth.service";

@Injectable()
export class allPageServices implements CanActivate,CanActivateChild{
    constructor(private authservice:AuthService,private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(this.authservice.isAuthenticated()){
            return true
        }else{
            this.router.navigate(['home'])
            return false
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        return this.canActivate(childRoute,state)
    }
}