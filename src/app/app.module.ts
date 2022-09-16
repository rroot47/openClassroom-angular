import { AuthGuard } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  {path : 'appareils', canActivate:[AuthGuard], component:AppareilViewComponent},
  {path : 'appareils/:id', canActivate:[AuthGuard], component:SingleAppareilComponent},
  {path : 'auth', component:AuthComponent },
  {path : '', component:AppareilViewComponent},
  {path : 'not-found', component:PageNotFoundComponent},
  {path : '**', redirectTo:'/not-found'},
]
@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppareilService,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
