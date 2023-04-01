import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GymcapyfitService } from 'src/app/services/gymcapyfit.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private capyfit: GymcapyfitService, private router: Router) { }

  canActivate(): any {
    if (this.capyfit.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
  }
  
}
