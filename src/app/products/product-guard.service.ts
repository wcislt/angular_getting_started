import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      // Don't call alert() in real life, this is fine for testing tho
      alert("Invalid product ID");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }
}
