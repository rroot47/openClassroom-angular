import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router,CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router:Router){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authService.isAuth){
            return true;
        }else{
            this.router.navigate(['/auth']);
        }
        return false;
    }
    
}