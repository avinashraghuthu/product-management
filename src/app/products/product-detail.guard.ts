import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // let id = +next.paramMap.get('id'); //One way to getting id
    let id = +next.url[1].path; // trying to get from url i.e, 'ex: products/2' here index 1 gives id value 
    if(isNaN(id) || id<1){
      alert("Invalid product id");
      this.router.navigate(['/products']);
      return false;
    }
    return true;
  }
  
}
