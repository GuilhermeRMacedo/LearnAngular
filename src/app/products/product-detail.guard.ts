import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let id = +next.url[1].path; //1, because the id is the second element on url. starts from 0,
                                  //+ transform a string into a number
      if(isNaN(id) || id<1){
        alert("Invalid product id");
        this.router.navigate(['/products']);
        return false;
      }
    return true;
  }
}
