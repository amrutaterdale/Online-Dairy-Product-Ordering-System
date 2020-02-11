import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate  {

  canActivate():boolean
  {
    let log=localStorage.getItem("islogin");
    if(log=="true")
    return true;
    else
    return false;
  }
  
}
