import { Observable } from 'rxjs';
import { DetailsComponent } from './Routing/details/details.component';

import { CanDeactivate,ActivatedRouteSnapshot,RouterStateSnapshot  } from "@angular/router";
import { flush } from '@angular/core/testing';

export interface Ideactivatecomp{
    canExit:()=>Observable<boolean>| Promise<boolean>| boolean
}

export class CanDeactivateservice implements CanDeactivate<Ideactivatecomp>{
    canDeactivate(component:Ideactivatecomp,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot,nextState:RouterStateSnapshot,){
    return component.canExit()
    }
}